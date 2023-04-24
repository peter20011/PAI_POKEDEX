package com.example.pokedex.Repository;

import com.example.pokedex.Entity.OwnedPokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnedPokemonRepository extends JpaRepository<OwnedPokemon, Long>{

    @Query(value = "SELECT EXISTS(SELECT * FROM owned_pokemon WHERE pokemon_id_pokemon = :pokemonId AND " +
            "user_id_user = :userId)", nativeQuery = true)
    boolean existsByPokemonIdAndUserId(@Param("pokemonId")long pokemonId, @Param("userId") long userId);
}
