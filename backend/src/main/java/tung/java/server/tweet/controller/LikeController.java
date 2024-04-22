package tung.java.server.tweet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tung.java.server.tweet.entity.Like;
import tung.java.server.tweet.repo.LikeRepository;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/likes")
public class LikeController {

    @Autowired
    private LikeRepository likeRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Like> getAllLikes() {
        return likeRepository.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Like createLike(@RequestBody Like like) {
        return likeRepository.save(like);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{userId}")
    public List<Like> getLikesByUserId(@PathVariable(value = "userId") Integer userId) {
        return likeRepository.findAll().stream()
                .filter(like -> like.getUser_id() == userId)
                .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{userId}/{tweetId}")
    public ResponseEntity<?> deleteLike(@PathVariable(value = "userId") Integer userId, @PathVariable(value = "tweetId") Integer tweetId) {
        Like like = likeRepository.findAll().stream()
                .filter(l -> l.getUser_id() == userId && l.getTweet_id() == tweetId)
                .findFirst()
                .orElseThrow();

        likeRepository.delete(like);

        return ResponseEntity.ok().build();
    }

}
