package com.example.pokedex.DAO;

import com.example.pokedex.Entity.Comment;
import com.example.pokedex.Entity.CommentDisplay;
import com.example.pokedex.Repository.CommentRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("comment")
public class CommentJPADataAccess implements CommentDAO{

    private final CommentRepository commentRepository;

    public CommentJPADataAccess(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }


    @Override
    public void addComment(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public List<CommentDisplay> getComments(long pokemonId) {
        return commentRepository.findAllCommentsByPokemonId(pokemonId);
    }

    @Override
    public void deleteComment(Comment comment) {
        commentRepository.delete(comment);
    }

    @Override
    public boolean ifExists(long idComment) {
        return commentRepository.ifExist(idComment);
    }

    @Override
    public Comment getCommentById(long idComment) {
        return commentRepository.getCommentById(idComment);
    }
}
