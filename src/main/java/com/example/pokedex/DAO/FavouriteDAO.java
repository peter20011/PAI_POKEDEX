package com.example.pokedex.DAO;

import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.PokemonReturned;

import java.util.List;

public interface FavouriteDAO {

    void addFavourite(FavoritePokemon favoritePokemon);

    boolean ifExists(long pokemonId, long userId);
    List<PokemonReturned> favorite(long userId);

    FavoritePokemon findFavoritePokemonByPokemonIdAndUserId(long pokemonId, long userId);

    void deleteFavourite(FavoritePokemon favoritePokemon);

}
