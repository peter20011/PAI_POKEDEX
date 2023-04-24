package com.example.pokedex.Config;


import com.example.pokedex.Entity.*;
import com.example.pokedex.Repository.*;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import org.json.JSONArray;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;


import java.time.LocalDate;
import java.util.List;

@Configuration
public class  Config {

    @Bean
    CommandLineRunner commandLineRunner(UserEntityRepository userEntityRepository,
                                        PokemonRepository pokemonRepository,
                                        OwnedPokemonRepository ownedPokemonRepository,
                                        FavoritePokemonRepository favoritePokemonRepository,
                                        CommentRepository commentRepository, PasswordEncoder passwordEncoder) {
        return args -> {

            //save users
            UserEntity user1 = new UserEntity("adam@wp.pl", passwordEncoder.encode("adam123"), "adam",
                    LocalDate.now(),Role.USER);
            UserEntity user2 = new UserEntity("marek@wp.pl", passwordEncoder.encode("marek123"), "marek",
                    LocalDate.now(),
                    Role.USER);

            userEntityRepository.saveAll(List.of(user1, user2));


            //save pokemon



            Pokemon Bulbasaur= new Pokemon("Bulbasaur");
            Pokemon Ivysaur= new Pokemon("Ivysaur");
            Pokemon Venusaur= new Pokemon("Venusaur");
            Pokemon Charmander= new Pokemon("Charmander");
            Pokemon Charmeleon= new Pokemon("Charmeleon");
            Pokemon Charizard= new Pokemon("Charizard");

            pokemonRepository.saveAll(List.of(Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard));

            //save comments



            Comment comment1 = new Comment("Bulbasaur is the best", LocalDate.now(), user1, Bulbasaur);
            Comment comment2 = new Comment("Ivysaur is the best", LocalDate.now(), user2, Ivysaur);
            Comment comment3 = new Comment("Venusaur is the best", LocalDate.now(), user1, Venusaur);
            Comment comment4 = new Comment("Charmander is the best", LocalDate.now(), user2, Charmander);
            Comment comment5 = new Comment("Charmeleon is the best", LocalDate.now(), user1, Charmeleon);
            Comment comment6 = new Comment("Charizard is the best", LocalDate.now(), user2, Charizard);
            commentRepository.saveAll(List.of(comment1, comment2, comment3, comment4, comment5, comment6));



            //save owned pokemon

            OwnedPokemon ownedPokemon_adam1 = new OwnedPokemon(user1, Bulbasaur);
            OwnedPokemon ownedPokemon_adam2 = new OwnedPokemon(user1, Ivysaur);
            OwnedPokemon ownedPokemon_adam3 = new OwnedPokemon(user1, Venusaur);

            OwnedPokemon ownedPokemon_marek1 = new OwnedPokemon(user2, Charmander);
            OwnedPokemon ownedPokemon_marek2 = new OwnedPokemon(user2, Charmeleon);
            OwnedPokemon ownedPokemon_marek3 = new OwnedPokemon(user2, Charizard);

            ownedPokemonRepository.saveAll(List.of(ownedPokemon_adam1, ownedPokemon_adam2, ownedPokemon_adam3, ownedPokemon_marek1, ownedPokemon_marek2, ownedPokemon_marek3));

            //favorite pokemon

            FavoritePokemon favoritePokemon_marek1= new FavoritePokemon(user2, Charizard);
            FavoritePokemon favoritePokemon_marek2= new FavoritePokemon(user2, Charmeleon);
            FavoritePokemon favoritePokemon_marek3= new FavoritePokemon(user2, Charmander);

            FavoritePokemon favoritePokemon_adam1= new FavoritePokemon(user1, Ivysaur);
            FavoritePokemon favoritePokemon_adam2= new FavoritePokemon(user1, Venusaur);
            FavoritePokemon favoritePokemon_adam3= new FavoritePokemon(user1, Bulbasaur);

            favoritePokemonRepository.saveAll(List.of(favoritePokemon_marek1, favoritePokemon_marek2, favoritePokemon_marek3, favoritePokemon_adam1, favoritePokemon_adam2, favoritePokemon_adam3));

        };
    }
}
