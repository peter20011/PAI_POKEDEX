package com.example.pokedex.DAO;

import com.example.pokedex.Entity.Pokemon;

public interface PokemonDAO {

    void addPokemon(Pokemon pokemon);

    boolean ifExists(String name);

    Pokemon findPokemonByName(String name);
}
