package com.example.pokedex.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.*;


@Entity
@Table(name = "users")
public class UserEntity  implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_user;
    @Column(nullable = false,
            unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private LocalDate created_at;
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<OwnedPokemon> ownedPokemon;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<FavoritePokemon> favoritePokemon;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Comment> comments;

    public UserEntity(String email, String password, String username, LocalDate created_at, Role role) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.created_at = created_at;
        this.role = role;
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    @Override
    public String getUsername() {
        return email;
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

    public Set<OwnedPokemon> getOwnedPokemon() {
        return ownedPokemon;
    }

    public void setOwnedPokemon(Set<OwnedPokemon> ownedPokemon) {
        this.ownedPokemon = ownedPokemon;
    }

    public Set<FavoritePokemon> getFavoritePokemon() {
        return favoritePokemon;
    }

    public void setFavoritePokemon(Set<FavoritePokemon> favoritePokemon) {
        this.favoritePokemon = favoritePokemon;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity user = (UserEntity) o;
        return id_user == user.id_user && Objects.equals(email, user.email) && Objects.equals(password, user.password) && Objects.equals(username, user.username) && Objects.equals(created_at, user.created_at) && role == user.role && Objects.equals(ownedPokemon, user.ownedPokemon) && Objects.equals(favoritePokemon, user.favoritePokemon);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_user, email, password, username, created_at, role, ownedPokemon, favoritePokemon);
    }
}