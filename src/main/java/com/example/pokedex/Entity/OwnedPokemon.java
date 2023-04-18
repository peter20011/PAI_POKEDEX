package com.example.pokedex.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "owned_pokemon")
public class OwnedPokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_owned_pokemon;
    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity user;
    @ManyToOne(fetch = FetchType.LAZY)
    private Pokemon pokemon;

    public OwnedPokemon( UserEntity user, Pokemon pokemon) {
        this.user = user;
        this.pokemon = pokemon;
    }

    public OwnedPokemon() {
    }

    public long getId_owned_pokemon() {
        return id_owned_pokemon;
    }

    public void setId_owned_pokemon(long id_owned_pokemon) {
        this.id_owned_pokemon = id_owned_pokemon;
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
