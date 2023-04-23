package com.example.pokedex.dtoMapper;

import com.example.pokedex.DTO.UserDTO;
import com.example.pokedex.Entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserEntityDTOMapper implements Function<UserEntity, UserDTO> {
    @Override
    public UserDTO apply(UserEntity userEntity) {
        return new UserDTO(
                userEntity.getEmail(),
                userEntity.getRole()
        );
    }
}
