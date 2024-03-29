package com.example.pokedex.Controller;


import com.example.pokedex.DTO.*;
import com.example.pokedex.Entity.Comment;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Services.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/app")
public class SideFunctionController {

    private ChangePasswordService changePasswordService;
    private AddFavouriteService addFavouriteService;
    private CommentService commentService;
    private AddOwnedService addOwnedService;

    private UserServiceDetails userServiceDetails;


    public SideFunctionController(ChangePasswordService changePasswordService,
                                  AddFavouriteService addFavouriteService,AddOwnedService addOwnedService,
                                  CommentService commentService, UserServiceDetails userServiceDetails){
        this.changePasswordService = changePasswordService;
        this.addFavouriteService = addFavouriteService;
        this.addOwnedService = addOwnedService;
        this.commentService = commentService;
        this.userServiceDetails = userServiceDetails;
    }

    @PostMapping(value = "/addToFavourite",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addToFavourite(@RequestBody FavouriteRequest request){
        return addFavouriteService.addToFavourite(request);
    }

    @GetMapping(value = "/getFromFavorites",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFromFavorites(Authentication authentication){
        return addFavouriteService.getFromFavorites(authentication);
    }

    @PostMapping(value = "/deleteFromFavourite",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteFromFavourite(@RequestBody FavouriteRequest request){
        return addFavouriteService.deleteFromFavourite(request);
    }

    @PostMapping(value = "/addToOwned",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addToOwned(@RequestBody OwnedRequest request){
        return addOwnedService.addToOwned(request);
    }

    @PostMapping(value = "/deleteFromOwned",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteFromOwned(@RequestBody OwnedRequest request){
        return addOwnedService.deleteFromOwned(request);
    }

    @GetMapping(value = "/getFromOwned",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFromOwned( Authentication authentication){
        return addOwnedService.getFromOwned(authentication);
    }

    @PostMapping(value = "/addComment/{pokemonName}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addComment(@RequestBody CommentRequest request, @PathVariable String pokemonName){
        return commentService.addComment(request,pokemonName);
    }

    @GetMapping("/getComments/{pokemonName}")
    public ResponseEntity<?> getComments(@PathVariable String pokemonName){
       return commentService.getComments(pokemonName);
    }

    @PostMapping(value = "/deleteComment",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteComment(@RequestBody AdminRequesst request){
        return commentService.deleteComment(request);
    }

    @PostMapping(value = "/changePassword",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request){
        return changePasswordService.changePassword(request);
    }

    @GetMapping(value = "/getUser",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUser(Authentication authentication){
        return userServiceDetails.getUser(authentication);
    }
}
