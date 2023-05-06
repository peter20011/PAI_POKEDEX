package com.example.pokedex.Repository;

import com.example.pokedex.Entity.Comment;
import com.example.pokedex.Entity.CommentDisplay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long>{
    @Query(value = "SELECT new com.example.pokedex.Entity.CommentDisplay(c.comment_id,c.content,c.created_at,c.user.username) " +
            "FROM Comment c WHERE c.pokemon.id_pokemon =:idPokemon ORDER BY c.created_at DESC")
    List<CommentDisplay> findAllCommentsByPokemonId(@Param("idPokemon") long idPok);


    @Query(value = "SELECT EXISTS(SELECT * FROM comment WHERE comment_id =:idComment)", nativeQuery = true)
    boolean ifExist(@Param("idComment") long idComment);

    @Query(value = "SELECT * FROM comment WHERE comment_id =:idCom", nativeQuery = true)
    Comment getCommentById(@Param("idCom") long idCom);
}
