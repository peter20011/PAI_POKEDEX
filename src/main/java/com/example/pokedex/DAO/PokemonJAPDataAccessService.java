package com.example.pokedex.DAO;

import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Repository.PokemonRepository;
import org.springframework.stereotype.Repository;


@Repository("pokemon")
public class PokemonJAPDataAccessService implements PokemonDAO{

    private PokemonRepository pokemonRepository;

    public PokemonJAPDataAccessService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
        pokemonRepository.save(pokemon);
    }

    @Override
    public boolean ifExists(String name) {
        return pokemonRepository.existsByName(name);
    }

    @Override
    public Pokemon findPokemonByName(String name) {
        return pokemonRepository.findByName(name);
    }
}
