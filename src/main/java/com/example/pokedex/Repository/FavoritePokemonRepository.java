package com.example.pokedex.Repository;

import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritePokemonRepository  extends JpaRepository<FavoritePokemon, Long>{

    @Query(value = "SELECT EXISTS(SELECT * FROM favorite_pokemon WHERE pokemon_id_pokemon = :pokemonId AND " +
            "user_id_user = :userId)", nativeQuery = true)
    boolean existsByPokemonIdAndUserId(@Param("pokemonId")long pokemonId,@Param("userId") long userId);

    @Query(value="SELECT p.* FROM pokemon p inner join favorite_pokemon fp on p.id_pokemon = fp.pokemon_id_pokemon " +
            "INNER JOIN users u on fp.user_id_user = u.id_user WHERE u.id_user = :userId", nativeQuery = true)
    List<Object> findByFavorite(@Param("userId") long userId);
}
