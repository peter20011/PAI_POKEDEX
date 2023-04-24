package com.example.pokedex.Services;

import com.example.pokedex.DAO.CommentDAO;
import com.example.pokedex.DAO.PokemonDAO;
import com.example.pokedex.DAO.UserDAO;
import com.example.pokedex.DTO.AdminRequesst;
import com.example.pokedex.DTO.CommentRequest;
import com.example.pokedex.Entity.Comment;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Entity.Role;
import com.example.pokedex.Entity.UserEntity;
import com.example.pokedex.Util.JWTUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
@Service
public class CommentService {

    Logger logger = LoggerFactory.getLogger(CommentService.class);
    private final UserDAO userDAO;
    private final CommentDAO commentDAO;
    private final JWTUtil jwtUtil;
    private final PokemonDAO pokemonDAO;

    public CommentService(
            @Qualifier("jpa") UserDAO userDAO,
            @Qualifier("comment") CommentDAO commentDAO,
            JWTUtil jwtUtil,
            @Qualifier("pokemon") PokemonDAO pokemonDAO) {
        this.userDAO = userDAO;
        this.commentDAO = commentDAO;
        this.jwtUtil = jwtUtil;
        this.pokemonDAO = pokemonDAO;
    }

    public ResponseEntity<?> addComment(CommentRequest request, String pokemonName){
        try {
            String email = jwtUtil.getSubject(request.token());
            UserEntity commenter= userDAO.findUserByEmail(email);
            if(!pokemonDAO.ifExists(pokemonName)){
                Pokemon pokemon = new Pokemon(pokemonName);
                pokemonDAO.addPokemon(pokemon);
            }
            Pokemon pokemon = pokemonDAO.findPokemonByName(pokemonName);
            if(pokemon == null){
                return new ResponseEntity<>("Pokemon not found", HttpStatus.NOT_FOUND);
            }
            if(commenter == null){
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
            if(request.comment().equals("")){
                return new ResponseEntity<>("Comment cannot be empty", HttpStatus.BAD_REQUEST);
            }

            Comment comment = new Comment(request.comment(), LocalDate.now(), commenter, pokemon);
            commentDAO.addComment(comment);
            return new ResponseEntity<>("Comment added", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //TODO repait this
    public ResponseEntity<?> getComments(String pokemonName){
        try {
            logger.info("Getting comments for pokemon: " + pokemonName);
            Pokemon pokemon = pokemonDAO.findPokemonByName(pokemonName);
            if(pokemon == null){
                return new ResponseEntity<>("Pokemon not found", HttpStatus.NOT_FOUND);
            }
            logger.info("Pokemon found: " + pokemon.getName()+" id: " + pokemon.getId_pokemon());
            List<Comment> comments=commentDAO.getComments(pokemon.getId_pokemon());
            logger.info("dupa3");
            return new ResponseEntity<>(comments, HttpStatus.OK);
        }catch (Exception e){
            logger.info(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> deleteComment(AdminRequesst request){
        try {
            String email = jwtUtil.getSubject(request.token());
            UserEntity admin= userDAO.findUserByEmail(email);
            logger.info("Admin found: " + admin.getEmail());
            logger.info("Admin role: " + admin.getRole());
            if(admin == null){
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
            if(!(admin.getRole()== Role.ADMIN)){
                return new ResponseEntity<>("You are not admin", HttpStatus.FORBIDDEN);
            }

            if(!commentDAO.ifExists(request.idComment())){
                return new ResponseEntity<>("Comment not found", HttpStatus.NOT_FOUND);
            }

            Comment comment = commentDAO.getCommentById(request.idComment());
            commentDAO.deleteComment(comment);

            return new ResponseEntity<>("Comment deleted", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
