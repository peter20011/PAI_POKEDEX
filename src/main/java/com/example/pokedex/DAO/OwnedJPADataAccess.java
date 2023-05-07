package com.example.pokedex.DAO;

import com.example.pokedex.Entity.OwnedPokemon;
import com.example.pokedex.Entity.PokemonReturned;
import com.example.pokedex.Repository.OwnedPokemonRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("owned")
public class OwnedJPADataAccess  implements OwnedDAO{

    private final OwnedPokemonRepository ownedPokemonRepository;

    public OwnedJPADataAccess(OwnedPokemonRepository ownedPokemonRepository) {
        this.ownedPokemonRepository = ownedPokemonRepository;
    }

    @Override
    public void addOwned(OwnedPokemon ownedPokemon) {
        ownedPokemonRepository.save(ownedPokemon);
    }

    @Override
    public boolean ifExists(long pokemonId, long userId) {
        return ownedPokemonRepository.existsByPokemonIdAndUserId(pokemonId, userId);
    }

    @Override
    public List<PokemonReturned> owning(long userId) {
        return ownedPokemonRepository.findOwnedPokemonByUserId(userId);
    }
}
