package com.example.pokedex.Repository;

import com.example.pokedex.Entity.FavoritePokemon;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.PokemonReturned;
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

    @Query(value="SELECT new com.example.pokedex.Entity.PokemonReturned(p.name) FROM Pokemon p " +
            "inner join  FavoritePokemon fp on p.id_pokemon = fp.pokemon.id_pokemon " +
            "INNER JOIN UserEntity u on fp.user.id_user = u.id_user WHERE u.id_user = :userId")
    List<PokemonReturned> findByFavorite(@Param("userId") long userId);

    @Query(value = "select * from favorite_pokemon where pokemon_id_pokemon = :pokemonId and user_id_user = :userId", nativeQuery = true)
    FavoritePokemon findFavoritePokemonByPokemonIdAndUserId(@Param("pokemonId") long pokemonId, @Param("userId") long userId);
}
