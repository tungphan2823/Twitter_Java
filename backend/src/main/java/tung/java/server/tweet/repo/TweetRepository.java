package tung.java.server.tweet.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tung.java.server.tweet.entity.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Integer> {
    List<Tweet> findByUserId(int userId);
}