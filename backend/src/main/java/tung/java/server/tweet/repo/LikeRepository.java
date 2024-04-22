package tung.java.server.tweet.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import tung.java.server.tweet.entity.Like;

public interface LikeRepository extends JpaRepository<Like, Integer> {
	
}
