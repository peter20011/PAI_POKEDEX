package com.example.pokedex.DAO;

import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Repository.FavoritePokemonRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("favourite")
public class FavouriteJPADataAccessService implements FavouriteDAO{

    private FavoritePokemonRepository  favoritePokemonRepository;

    public FavouriteJPADataAccessService(FavoritePokemonRepository favoritePokemonRepository) {
        this.favoritePokemonRepository = favoritePokemonRepository;
    }

    @Override
    public void addFavourite(FavoritePokemon favoritePokemon) {
        favoritePokemonRepository.save(favoritePokemon);
    }

    @Override
    public boolean ifExists(long pokemonId, long userId) {
        return favoritePokemonRepository.existsByPokemonIdAndUserId(pokemonId, userId);
    }

    @Override
    public List<Object> favorite(long userId) {
        return favoritePokemonRepository.findByFavorite(userId);
    }
}
