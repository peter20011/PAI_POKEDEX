package com.example.pokedex.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "favorite_pokemon")
public class FavoritePokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_favorite_pokemon;
    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity user;
    @ManyToOne(fetch = FetchType.LAZY)
    private Pokemon pokemon;

    public FavoritePokemon(UserEntity user, Pokemon pokemon) {
        this.user = user;
        this.pokemon = pokemon;
    }

    public FavoritePokemon() {
    }

    public long getId_favorite_pokemon() {
        return id_favorite_pokemon;
    }

    public void setId_favorite_pokemon(long id_favorite_pokemon) {
        this.id_favorite_pokemon = id_favorite_pokemon;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public Pokemon getPokemon() {
        return pokemon;
    }

    public void setPokemon(Pokemon pokemon) {
        this.pokemon = pokemon;
    }
}
