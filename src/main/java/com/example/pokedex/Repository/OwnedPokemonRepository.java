package com.example.pokedex.Repository;

import com.example.pokedex.Entity.OwnedPokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnedPokemonRepository extends JpaRepository<OwnedPokemon, Long>{
}
