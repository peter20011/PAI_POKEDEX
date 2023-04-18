package com.example.pokedex.Entity;

import jakarta.persistence.*;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pokemon")
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_pokemon;
    @Column(nullable = false)
    private String name;
    @OneToMany(mappedBy = "pokemon", cascade = CascadeType.ALL)
    private List<Comment> comments ;
    @OneToMany(mappedBy = "pokemon", cascade = CascadeType.ALL)
    private List<OwnedPokemon> ownedPokemons;
    @OneToMany(mappedBy = "pokemon", cascade = CascadeType.ALL)
    private List<FavoritePokemon> favoritePokemons;

    public Pokemon(String name) {
        this.name = name;
    }

    public Pokemon() {
    }

    public long getId_pokemon() {
        return id_pokemon;
    }

    public void setId_pokemon(long id_pokemon) {
        this.id_pokemon = id_pokemon;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<OwnedPokemon> getOwnedPokemons() {
        return ownedPokemons;
    }

    public void setOwnedPokemons(List<OwnedPokemon> ownedPokemons) {
        this.ownedPokemons = ownedPokemons;
    }

    public List<FavoritePokemon> getFavoritePokemons() {
        return favoritePokemons;
    }

    public void setFavoritePokemons(List<FavoritePokemon> favoritePokemons) {
        this.favoritePokemons = favoritePokemons;
    }
}
