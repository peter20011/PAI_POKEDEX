package com.example.pokedex.Controller;


import com.example.pokedex.DTO.*;
import com.example.pokedex.Entity.Pokemon;
import com.example.pokedex.Services.AddFavouriteService;
import com.example.pokedex.Services.AddOwnedService;
import com.example.pokedex.Services.ChangePasswordService;
import com.example.pokedex.Services.CommentService;
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


    public SideFunctionController(ChangePasswordService changePasswordService,
                                  AddFavouriteService addFavouriteService,AddOwnedService addOwnedService,
                                  CommentService commentService) {
        this.changePasswordService = changePasswordService;
        this.addFavouriteService = addFavouriteService;
        this.addOwnedService = addOwnedService;
        this.commentService = commentService;
    }

    @PostMapping("/addToFavourite")
    public ResponseEntity<?> addToFavourite(@RequestBody FavouriteRequest request){
        return addFavouriteService.addToFavourite(request);
    }

    @GetMapping(value = "/getFromFavorites",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFromFavorites(Authentication authentication){
        return addFavouriteService.getFromFavorites(authentication);
    }

    @PostMapping("/addToOwned")
    public ResponseEntity<?> addToOwned(@RequestBody OwnedRequest request){
        return addOwnedService.addToOwned(request);
    }

    @GetMapping(value = "/getFromOwned",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFromOwned( Authentication authentication){
        return addOwnedService.getFromOwned(authentication);
    }

    @PostMapping("/addComment/{pokemonName}")
    public ResponseEntity<?> addComment(@RequestBody CommentRequest request, @PathVariable String pokemonName){
        return commentService.addComment(request,pokemonName);
    }

    @GetMapping("/getComments/{pokemonName}")
    public ResponseEntity<?> getComments(@PathVariable String pokemonName){
       return commentService.getComments(pokemonName);
    }

    @PostMapping("/deleteComment")
    public ResponseEntity<?> deleteComment(@RequestBody AdminRequesst request){
        return commentService.deleteComment(request);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request){
        return changePasswordService.changePassword(request);
    }
}
