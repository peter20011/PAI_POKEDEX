package com.example.pokedex.Entity;

import java.time.LocalDate;

public class CommentDisplay {

    private long id;
    private String description;
    private LocalDate date;
    private String user;

    public CommentDisplay(long id,String description, LocalDate date, String user) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
