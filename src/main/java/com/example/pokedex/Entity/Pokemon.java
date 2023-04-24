package com.example.pokedex.Entity;

import jakarta.persistence.*;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "pokemon")
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_pokemon;
    @Column(nullable = false)
    private String name;
    @OneToMany(mappedBy = "pokemon", cascade = CascadeType.ALL)
    private Set<Comment> comments ;
    @OneToMany(mappedBy = "pokemon", cascade = CascadeType.ALL)
    private Set<OwnedPokemon> ownedPokemons;
    @OneToMany(mappedBy = "pokemon", cascade = CascadeType.ALL)
    private Set<FavoritePokemon> favoritePokemons;

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

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Set<OwnedPokemon> getOwnedPokemons() {
        return ownedPokemons;
    }

    public void setOwnedPokemons(Set<OwnedPokemon> ownedPokemons) {
        this.ownedPokemons = ownedPokemons;
    }

    public Set<FavoritePokemon> getFavoritePokemons() {
        return favoritePokemons;
    }

    public void setFavoritePokemons(Set<FavoritePokemon> favoritePokemons) {
        this.favoritePokemons = favoritePokemons;
    }


}
