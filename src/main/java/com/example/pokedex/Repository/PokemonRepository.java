package com.example.pokedex.Repository;

import com.example.pokedex.Entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Long>{
    @Query(value = "SELECT * FROM pokemon WHERE name = :name", nativeQuery = true)
    Pokemon findByName(@Param("name")String name);
}
