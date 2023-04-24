package com.example.pokedex.DAO;

import com.example.pokedex.Entity.OwnedPokemon;

public interface OwnedDAO {

    void addOwned(OwnedPokemon ownedPokemon);

    boolean ifExists(long pokemonId, long userId);
}
