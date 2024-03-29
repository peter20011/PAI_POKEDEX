package com.example.pokedex.Repository;

import com.example.pokedex.Entity.UserDataRequest;
import com.example.pokedex.Entity.UserEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity, Long>{

    @Query(value = "SELECT * FROM users  WHERE email =:email", nativeQuery = true)
    UserEntity findByEmail(@Param("email") String email);

    @Query(value = "SELECT EXISTS(SELECT * FROM users  WHERE email =:email)", nativeQuery = true)
    boolean findEmail(@Param("email") String email);
    @Modifying
    @Query(value = "UPDATE users SET password =:password WHERE email =:email", nativeQuery = true)
    void changePassword(@Param("email") String email, @Param("password") String password);

    @Query(value="SELECT new com.example.pokedex.Entity.UserDataRequest(ue.username,ue.role) FROM UserEntity ue where ue" +
            ".email=:email")
    UserDataRequest getUserData(@Param("email") String email);
}
