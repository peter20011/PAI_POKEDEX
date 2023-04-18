package com.example.pokedex.Repository;

import com.example.pokedex.Entity.FavoritePokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoritePokemonRepository  extends JpaRepository<FavoritePokemon, Long>{
}
