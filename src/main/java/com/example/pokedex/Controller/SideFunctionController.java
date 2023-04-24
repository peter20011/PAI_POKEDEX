package com.example.pokedex.Controller;


import com.example.pokedex.DTO.ChangePasswordRequest;
import com.example.pokedex.DTO.FavouriteRequest;
import com.example.pokedex.DTO.OwnedRequest;
import com.example.pokedex.Services.AddFavouriteService;
import com.example.pokedex.Services.AddOwnedService;
import com.example.pokedex.Services.ChangePasswordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/app")
public class SideFunctionController {

    private ChangePasswordService changePasswordService;
    private AddFavouriteService addFavouriteService;

    private AddOwnedService addOwnedService;

    public SideFunctionController(ChangePasswordService changePasswordService,
                                  AddFavouriteService addFavouriteService,AddOwnedService addOwnedService) {
        this.changePasswordService = changePasswordService;
        this.addFavouriteService = addFavouriteService;
        this.addOwnedService = addOwnedService;
    }

    @PostMapping("/addToFavourite")
    public ResponseEntity<?> addToFavourite(@RequestBody FavouriteRequest request){
        return addFavouriteService.addToFavourite(request);
    }

    @GetMapping("/getFromFavorites")
    public ResponseEntity<String> getFromFavorites(){
        String str="getFromFavorites";
        return new ResponseEntity<>(str,HttpStatus.OK);
    }

    @PostMapping("/addToOwned")
    public ResponseEntity<?> addToOwned(@RequestBody OwnedRequest request){
        return addOwnedService.addToOwned(request);
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
    public ResponseEntity<String> getComments(@RequestBody String str){
        return new ResponseEntity<>(str,HttpStatus.OK);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request){
        return changePasswordService.changePassword(request);
    }
}
