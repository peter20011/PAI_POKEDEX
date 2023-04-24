package com.example.pokedex.Repository;

import com.example.pokedex.Entity.OwnedPokemon;
import com.example.pokedex.Entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OwnedPokemonRepository extends JpaRepository<OwnedPokemon, Long>{

    @Query(value = "SELECT EXISTS(SELECT * FROM owned_pokemon WHERE pokemon_id_pokemon = :pokemonId AND " +
            "user_id_user = :userId)", nativeQuery = true)
    boolean existsByPokemonIdAndUserId(@Param("pokemonId")long pokemonId, @Param("userId") long userId);

    @Query(value="SELECT p.* FROM pokemon p inner join owned_pokemon op on p.id_pokemon = op.pokemon_id_pokemon" +
            " INNER JOIN users u on op.user_id_user = u.id_user WHERE u.id_user = :userId", nativeQuery = true)
    List<Object> findOwnedPokemonByUserId(@Param("userId") long userId);

}
