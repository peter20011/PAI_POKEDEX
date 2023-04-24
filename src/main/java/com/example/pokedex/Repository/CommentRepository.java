package com.example.pokedex.Repository;

import com.example.pokedex.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long>{
    @Query(value = "SELECT * FROM comment WHERE pokemon_id_pokemon =:idPokemon ORDER BY created_at DESC", nativeQuery = true)
    List<Object> findAllCommentsByPokemonId(@Param("idPokemon") long idPok);

    @Query(value = "SELECT EXISTS(SELECT * FROM comment WHERE comment_id =:idComment)", nativeQuery = true)
    boolean ifExist(@Param("idComment") long idComment);

    @Query(value = "SELECT * FROM comment WHERE comment_id =:idCom", nativeQuery = true)
    Comment getCommentById(@Param("idCom") long idCom);
}
