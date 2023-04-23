package com.example.pokedex.Services;

import com.example.pokedex.DAO.UserDAO;
import com.example.pokedex.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceDetails implements UserDetailsService {

    private final UserDAO userDAO;

    public UserServiceDetails(@Qualifier("jpa") UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userDAO.findUserByEmail(email);
        if(userEntity==null){
            throw new UsernameNotFoundException("User not found");
        }
        return userEntity;
    }
}
