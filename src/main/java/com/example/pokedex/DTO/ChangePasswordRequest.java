package com.example.pokedex.DTO;

public record ChangePasswordRequest(String token, String oldPassword, String newPassword, String newPasswordConfirm) {
}
