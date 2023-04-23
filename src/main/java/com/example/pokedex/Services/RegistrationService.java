package com.example.pokedex.Services;


import com.example.pokedex.DAO.UserDAO;
import com.example.pokedex.DTO.AuthenticationFailedResponse;
import com.example.pokedex.DTO.RegistrationResponse;
import com.example.pokedex.DTO.UserRegistrationRequest;
import com.example.pokedex.Entity.Role;
import com.example.pokedex.Entity.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.UUID;

@Service
public class RegistrationService {
    private final EmailValidatorService emailValidatorService;
    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;


    public RegistrationService(EmailValidatorService emailValidatorService, UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.emailValidatorService = emailValidatorService;
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity<Object> register(UserRegistrationRequest request){

        if(!emailValidatorService.test(request.email())){
            return  new ResponseEntity<>( new AuthenticationFailedResponse("Email is not valid!"), HttpStatus.BAD_REQUEST);
        }

        if(userDAO.existsUserWithEmail(request.email())){
            return  new ResponseEntity<>( new AuthenticationFailedResponse("Email is taken!"), HttpStatus.BAD_REQUEST);
        }

        UserEntity userEntity = new UserEntity(
                request.email(),
                passwordEncoder.encode(request.password()),
                request.username(),
                LocalDate.now(),
                Role.USER
        );

        userDAO.save(userEntity);

        return new ResponseEntity<>( new RegistrationResponse("User " + userEntity.getUsername() + " registered successfully")
                ,HttpStatus.OK);
    }

}
