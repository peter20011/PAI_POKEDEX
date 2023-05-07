package com.example.pokedex.Repository;

import com.example.pokedex.Entity.OwnedPokemon;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.PokemonReturned;
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

    @Query(value="SELECT new com.example.pokedex.Entity.PokemonReturned(p.name)  FROM Pokemon p inner join OwnedPokemon " +
            "op on p.id_pokemon = op.pokemon.id_pokemon" +
            " INNER JOIN UserEntity u on op.user.id_user = u.id_user WHERE u.id_user = :userId")
    List<PokemonReturned> findOwnedPokemonByUserId(@Param("userId") long userId);

}
