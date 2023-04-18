package com.example.pokedex.Controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
public class SideFunctionController {
    @PostMapping("/addToFavourite")
    public ResponseEntity<String> addToFavourite(@RequestBody String str){
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @GetMapping("/getFromFavorites")
    public ResponseEntity<String> getFromFavorites(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }

    @PostMapping("/addToOwned")
    public ResponseEntity<String> addToOwned(@RequestBody String str){
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @GetMapping("/getFromOwned")
    public ResponseEntity<String> getFromOwned(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }

    @PostMapping("/addComment")
    public ResponseEntity<String> addComment(@RequestBody String str){
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @GetMapping("/getComments")
    public ResponseEntity<String> getComments(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }
}
