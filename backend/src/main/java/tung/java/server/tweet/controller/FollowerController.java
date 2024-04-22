package tung.java.server.tweet.controller;

import tung.java.server.tweet.entity.Follower;
import tung.java.server.tweet.repo.FollowerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/followers")
public class FollowerController {

    @Autowired
    private FollowerRepository followerRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    // Fetch a follower by followerId
    @GetMapping("/{followerId}")
    public ResponseEntity<List<Follower>> getFollower(@PathVariable int followerId) {
        List<Follower> followers = followerRepository.findByFollowerId(followerId);

        if (!followers.isEmpty()) {
            return ResponseEntity.ok(followers);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    // Fetch all followers
    @GetMapping
    public List<Follower> getAllFollowers() {
        return followerRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    // Delete a follower
    @DeleteMapping("/{followerId}")
    public ResponseEntity<Void> deleteFollower(@PathVariable int followerId) {
        Follower follower = followerRepository.findById(followerId)
                .orElseThrow();

        followerRepository.delete(follower);
        return ResponseEntity.ok().build();
    }
}
