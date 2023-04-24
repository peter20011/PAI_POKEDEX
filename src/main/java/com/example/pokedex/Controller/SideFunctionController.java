package com.example.pokedex.Controller;


import com.example.pokedex.DTO.ChangePasswordRequest;
import com.example.pokedex.Services.ChangePasswordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
public class SideFunctionController {

    private ChangePasswordService changePasswordService;

    public SideFunctionController(ChangePasswordService changePasswordService) {
        this.changePasswordService = changePasswordService;
    }

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

    @PostMapping("/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request){
        return changePasswordService.changePassword(request);
    }
}
