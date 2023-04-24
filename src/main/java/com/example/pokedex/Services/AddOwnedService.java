package com.example.pokedex.Services;

import com.example.pokedex.DAO.OwnedDAO;
import com.example.pokedex.DAO.PokemonDAO;
import com.example.pokedex.DAO.UserDAO;
import com.example.pokedex.DTO.OwnedRequest;
import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Entity.OwnedPokemon;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.UserEntity;
import com.example.pokedex.Util.JWTUtil;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddOwnedService {

    private final UserDAO userDAO;

    private final OwnedDAO ownedDAO;

    private final JWTUtil jwtUtil;

    private final PokemonDAO pokemonDAO;

    public AddOwnedService(@Qualifier("jpa") UserDAO userDAO,
                           @Qualifier("owned") OwnedDAO ownedDAO,
                           JWTUtil jwtUtil,
                           @Qualifier("pokemon")PokemonDAO pokemonDAO) {
        this.userDAO = userDAO;
        this.ownedDAO = ownedDAO;
        this.jwtUtil = jwtUtil;
        this.pokemonDAO = pokemonDAO;
    }


    public ResponseEntity<?> addToOwned(OwnedRequest request){
        try{
            String email = jwtUtil.getSubject(request.token());
            UserEntity userEntity = userDAO.findUserByEmail(email);
            if(userEntity == null){
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }

            if(pokemonDAO.ifExists(request.pokemonName())){
                Pokemon pokemon = pokemonDAO.findPokemonByName(request.pokemonName());
                if(pokemon == null){
                    return new ResponseEntity<>("Pokemon not found", HttpStatus.NOT_FOUND);
                }
                if(ownedDAO.ifExists(pokemon.getId_pokemon(), userEntity.getId_user())){
                    return new ResponseEntity<>("Pokemon already is owned", HttpStatus.BAD_REQUEST);
                }
                OwnedPokemon ownedPokemon = new OwnedPokemon(userEntity, pokemon);
                ownedDAO.addOwned(ownedPokemon);
                return new ResponseEntity<>("Pokemon added to owned", HttpStatus.OK);

            }
            Pokemon pokemon = new Pokemon(request.pokemonName());
            pokemonDAO.addPokemon(pokemon);
            OwnedPokemon ownedPokemon = new OwnedPokemon(userEntity, pokemon);
            ownedDAO.addOwned(ownedPokemon);
            return new ResponseEntity<>("Pokemon added to owned", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?>getFromOwned(Authentication authentication){
       try {
           UserEntity owner = userDAO.findUserByEmail(authentication.getName());
           List<Object> ownedList=ownedDAO.owning(owner.getId_user());

           if(ownedList.isEmpty()){
               return new ResponseEntity<>(ownedList, HttpStatus.NOT_FOUND);
           }
           return new ResponseEntity<>(ownedList, HttpStatus.OK);
       }catch (Exception e){
           ArrayList<Pokemon> empty = new ArrayList<>();
           return new ResponseEntity<>(empty, HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }
}
