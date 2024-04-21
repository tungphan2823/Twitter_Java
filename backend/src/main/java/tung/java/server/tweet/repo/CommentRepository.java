package tung.java.server.tweet.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tung.java.server.tweet.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
