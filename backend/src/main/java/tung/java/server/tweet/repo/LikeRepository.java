package tung.java.server.tweet.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tung.java.server.tweet.entity.Like;

public interface LikeRepository extends JpaRepository<Like, Integer> {
}
