package com.example.pokedex.Services;

import com.example.pokedex.DTO.AuthenticationFailedResponse;
import com.example.pokedex.DTO.AuthenticationRequest;
import com.example.pokedex.DTO.AuthenticationResponse;
import com.example.pokedex.DTO.UserDTO;
import com.example.pokedex.Entity.UserEntity;
import com.example.pokedex.Util.JWTUtil;
import com.example.pokedex.dtoMapper.UserEntityDTOMapper;
import org.apache.logging.log4j.LogManager;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final UserEntityDTOMapper userEntityDTOMapper;
    private final JWTUtil jwtUtil;
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    public AuthenticationService(AuthenticationManager authenticationManager,
                                  UserEntityDTOMapper userEntityDTOMapper,
                                  JWTUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.userEntityDTOMapper = userEntityDTOMapper;
        this.jwtUtil = jwtUtil;
    }


    public ResponseEntity<?> login(AuthenticationRequest request){
        try{
            logger.warn("Warning message" + request.email() + request.password());
            Authentication authentication;
            logger.warn("Warning message");

            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.email(),
                            request.password()
                    )
            );
            logger.warn("Warning message");

            UserEntity principal = (UserEntity) authentication.getPrincipal();
            logger.warn("Warning message1"+ principal);
            UserDTO userDTO = userEntityDTOMapper.apply(principal);
            logger.warn("Warning message2" );
            String token = jwtUtil.issueToken(userDTO.email(), userDTO.role().toString());
            logger.warn("Warning message3");
            SecurityContextHolder.getContext().setAuthentication(authentication);
            logger.warn("Warning message4");

            return new ResponseEntity<>(new AuthenticationResponse(token, "Login success"), HttpStatus.OK);
        }catch(AuthenticationException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
