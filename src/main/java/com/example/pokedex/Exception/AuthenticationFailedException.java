package com.example.pokedex.Exception;

public class AuthenticationFailedException   extends RuntimeException  {
    public AuthenticationFailedException(String email, String password) {
        super("Incorrect email: " + email + " or password: " + password);
    }
}
