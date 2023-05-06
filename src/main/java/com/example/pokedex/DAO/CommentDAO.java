package com.example.pokedex.DAO;

import com.example.pokedex.Entity.Comment;
import com.example.pokedex.Entity.CommentDisplay;

import java.util.List;

public interface CommentDAO {

    void addComment(Comment comment);
    List<CommentDisplay> getComments(long pokemonId);

    void deleteComment(Comment comment);

    boolean ifExists(long idComment);

    Comment getCommentById(long idComment);


}
