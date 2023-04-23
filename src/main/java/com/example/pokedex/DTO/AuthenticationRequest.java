package com.example.pokedex.DTO;

public record AuthenticationRequest (String email,
                                    String password) {
}
