package com.example.pokedex.DAO;

import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Entity.Pokemon;

import java.util.List;

public interface FavouriteDAO {

    void addFavourite(FavoritePokemon favoritePokemon);

    boolean ifExists(long pokemonId, long userId);
    List<Object> favorite(long userId);
}
