package com.example.pokedex.Repository;

import com.example.pokedex.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long>{
}
