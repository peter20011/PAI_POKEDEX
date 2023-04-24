package com.example.pokedex.Services;


import com.example.pokedex.DAO.FavouriteDAO;
import com.example.pokedex.DAO.PokemonDAO;
import com.example.pokedex.DAO.UserDAO;
import com.example.pokedex.DTO.FavouriteRequest;
import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.UserEntity;
import com.example.pokedex.Util.JWTUtil;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AddFavouriteService {
    private final UserDAO userDAO;
    private final FavouriteDAO favouriteDAO;
    private final JWTUtil jwtUtil;
    private final PokemonDAO pokemonDAO;

    public AddFavouriteService(@Qualifier("jpa") UserDAO userDAO,
                               @Qualifier("favourite") FavouriteDAO favouriteDAO,
                               JWTUtil jwtUtil,
                               @Qualifier("pokemon") PokemonDAO pokemonDAO) {
        this.userDAO = userDAO;
        this.favouriteDAO = favouriteDAO;
        this.jwtUtil = jwtUtil;
        this.pokemonDAO = pokemonDAO;
    }

    public ResponseEntity<?> addToFavourite(FavouriteRequest request){
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
                if(favouriteDAO.ifExists(pokemon.getId_pokemon(), userEntity.getId_user())){
                    return new ResponseEntity<>("Pokemon already in favourites", HttpStatus.BAD_REQUEST);
                }
                FavoritePokemon favoritePokemon = new FavoritePokemon(userEntity, pokemon);
                favouriteDAO.addFavourite(favoritePokemon);
                return new ResponseEntity<>("Pokemon added to favourites", HttpStatus.OK);

            }
            Pokemon pokemon = new Pokemon(request.pokemonName());
            pokemonDAO.addPokemon(pokemon);
            FavoritePokemon favoritePokemon = new FavoritePokemon(userEntity, pokemon);
            favouriteDAO.addFavourite(favoritePokemon);
            return new ResponseEntity<>("Pokemon added to favourites", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
