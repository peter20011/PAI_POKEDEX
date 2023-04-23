package com.example.pokedex.DTO;

import com.example.pokedex.Entity.Role;

public record UserDTO(
        String email,
        Role role
) {
}
