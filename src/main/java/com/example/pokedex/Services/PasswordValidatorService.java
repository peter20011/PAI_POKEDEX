package com.example.pokedex.Services;
import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class PasswordValidatorService implements Predicate<String>{

    private final static String PASSWORD_REGEX = "^[a-zA-Z]{6,9}\\d$";



    @Override
    public boolean test(String s) {
        if (s.matches(PASSWORD_REGEX)) {
            return true;
        }
        return false;
    }
}
