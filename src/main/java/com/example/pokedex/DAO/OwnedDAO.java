package com.example.pokedex.DAO;

import com.example.pokedex.Entity.OwnedPokemon;
import com.example.pokedex.Entity.Pokemon;

import java.util.List;

public interface OwnedDAO {

    void addOwned(OwnedPokemon ownedPokemon);

    boolean ifExists(long pokemonId, long userId);

    List<Object> owning(long userId);
}
