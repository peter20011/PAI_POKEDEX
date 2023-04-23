package com.example.pokedex.Repository;

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

    @Modifying
    @Query(value="SELECT CASE WHEN count(u) >0 THEN TRUE ELSE FALSE END" +
            "FROM users u WHERE u.email= :emails",nativeQuery = true)
    Boolean selectExistsEmail(@Param("emails")String emails);
}
