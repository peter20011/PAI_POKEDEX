package com.example.pokedex.Repository;

import com.example.pokedex.Entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JWTokenRepository extends JpaRepository<Token, Long>{
    boolean existsByToken(String jwt);
}
