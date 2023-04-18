package com.example.pokedex.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "user_entity")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_user;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private LocalDate created_at;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<OwnedPokemon> ownedPokemon;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<FavoritePokemon> favoritePokemon ;

    public UserEntity(String email, String password, String username, LocalDate created_at) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.created_at = created_at;
    }

    public UserEntity() {
    }

    public long getId_user() {
        return id_user;
    }

    public void setId_user(long id_user) {
        this.id_user = id_user;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDate created_at) {
        this.created_at = created_at;
    }

    public List<OwnedPokemon> getOwnedPokemon() {
        return ownedPokemon;
    }

    public void setOwnedPokemon(List<OwnedPokemon> ownedPokemon) {
        this.ownedPokemon = ownedPokemon;
    }

    public List<FavoritePokemon> getFavoritePokemon() {
        return favoritePokemon;
    }

    public void setFavoritePokemon(List<FavoritePokemon> favoritePokemon) {
        this.favoritePokemon = favoritePokemon;
    }
}
