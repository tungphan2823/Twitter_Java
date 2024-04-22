package tung.java.server.tweet.repo;

import tung.java.server.tweet.entity.Follower;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follower, Integer> {
	
}
