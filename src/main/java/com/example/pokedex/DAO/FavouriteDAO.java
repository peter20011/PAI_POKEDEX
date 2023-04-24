package com.example.pokedex.DAO;

import com.example.pokedex.Entity.FavoritePokemon;

public interface FavouriteDAO {

    void addFavourite(FavoritePokemon favoritePokemon);

    boolean ifExists(long pokemonId, long userId);
}
