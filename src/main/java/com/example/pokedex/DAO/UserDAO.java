package com.example.pokedex.DAO;

import com.example.pokedex.Entity.UserEntity;
import org.apache.catalina.User;

import java.util.List;

public interface UserDAO {
    List<UserEntity> selectAllUsers();

    UserEntity findUserByEmail(String email);

    boolean existsUserWithEmail(String email);

    void save(UserEntity userEntity);

    void changePassword(String email, String password);

}
