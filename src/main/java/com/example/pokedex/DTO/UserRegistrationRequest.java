package com.example.pokedex.DTO;

public record UserRegistrationRequest(String email,
                                      String password,
                                      String username){
}
