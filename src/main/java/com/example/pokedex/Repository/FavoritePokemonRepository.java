package com.example.pokedex.Repository;

import com.example.pokedex.Entity.FavoritePokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoritePokemonRepository  extends JpaRepository<FavoritePokemon, Long>{

    @Query(value = "SELECT EXISTS(SELECT * FROM favorite_pokemon WHERE pokemon_id_pokemon = :pokemonId AND " +
            "user_id_user = :userId)", nativeQuery = true)
    boolean existsByPokemonIdAndUserId(@Param("pokemonId")long pokemonId,@Param("userId") long userId);
}
