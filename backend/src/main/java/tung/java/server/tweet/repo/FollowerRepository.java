package tung.java.server.tweet.repo;

import tung.java.server.tweet.entity.Follower;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowerRepository extends JpaRepository<Follower, Integer> {
  
	List<Follower> findByFollowerId(int followerId);

}
