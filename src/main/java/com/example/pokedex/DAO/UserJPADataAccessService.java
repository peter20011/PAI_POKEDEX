package com.example.pokedex.DAO;


import com.example.pokedex.Entity.UserDataRequest;
import com.example.pokedex.Entity.UserEntity;
import com.example.pokedex.Repository.UserEntityRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("jpa")
public class UserJPADataAccessService  implements UserDAO{

    private final UserEntityRepository userEntityRepository;

    public UserJPADataAccessService (UserEntityRepository userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }

    @Override
    public List<UserEntity> selectAllUsers() {
      return  this.userEntityRepository.findAll();
    }

    @Override
    public UserEntity findUserByEmail(String email) {
        return userEntityRepository.findByEmail(email);
    }

    @Override
    public boolean existsUserWithEmail(String email) {
        return userEntityRepository.findEmail(email);
    }

    @Override
    public void save(UserEntity userEntity) {
        userEntityRepository.save(userEntity);
    }

    @Override
    public void changePassword(String email, String password) {
        userEntityRepository.changePassword(email, password);
    }

    @Override
    public UserDataRequest getData(String email) {
        return userEntityRepository.getUserData(email);
    }

}
