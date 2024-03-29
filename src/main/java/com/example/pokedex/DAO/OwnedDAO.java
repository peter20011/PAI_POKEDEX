package com.example.pokedex.DAO;

import com.example.pokedex.Entity.OwnedPokemon;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.PokemonReturned;

import java.util.List;

public interface OwnedDAO {

    void addOwned(OwnedPokemon ownedPokemon);

    boolean ifExists(long pokemonId, long userId);

    List<PokemonReturned> owning(long userId);

    OwnedPokemon findOwnedPokemonByPokemonIdAndUserId(long pokemonId, long userId);

    void deleteOwned(OwnedPokemon ownedPokemon);
}
