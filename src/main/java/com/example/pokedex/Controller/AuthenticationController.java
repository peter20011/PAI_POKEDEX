package com.example.pokedex.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @PostMapping("login")
    public ResponseEntity<String> login(){
        String str="login";
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<String> register(){
        String str="register";
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

    @PostMapping("logout")
    public ResponseEntity<String> logout(){
        String str="logout";
        return new ResponseEntity<>(str, HttpStatus.OK);
    }

}
