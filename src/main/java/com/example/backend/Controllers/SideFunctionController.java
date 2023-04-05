package com.example.backend.Controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SideFunctionController {

    @PostMapping("/app/addToFavourite")
    public ResponseEntity<String> addToFavourite(@RequestBody String str){
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @GetMapping("/app/getFromFavorites")
    public ResponseEntity<String> getFromFavorites(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }

    @PostMapping("/app/addToOwned")
    public ResponseEntity<String> addToOwned(@RequestBody String str){
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @GetMapping("/app/getFromOwned")
    public ResponseEntity<String> getFromOwned(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }

    @PostMapping("/app/addComment")
    public ResponseEntity<String> addComment(@RequestBody String str){
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @GetMapping("/app/getComments")
    public ResponseEntity<String> getComments(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }


}
