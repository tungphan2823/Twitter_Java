package tung.java.server.tweet.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tung.java.server.tweet.entity.Like;
import tung.java.server.tweet.repo.LikeRepository;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/likes")
public class LikeController {

    private final LikeRepository likeRepository;

    public LikeController(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Like> getAllLikes() {
        return likeRepository.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<Like> getLikeById(@PathVariable int id) {
        return likeRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Like createLike(@RequestBody Like like) {
        return likeRepository.save(like);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public ResponseEntity<Like> updateLike(@RequestBody Like updatedLike, @PathVariable int id) {
        return likeRepository.findById(id)
                .map(like -> {
                    like.setLike_id(updatedLike.getLike_id());
                    like.setTweet_id(updatedLike.getTweet_id());
                    like.setUser_id(updatedLike.getUser_id());
                    like.setTimestamp(updatedLike.getTimestamp());
                    likeRepository.save(like);
                    return ResponseEntity.ok(like);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
//    @CrossOrigin(origins = "http://localhost:3000")
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteLike(@PathVariable int id) {
//        if (likeRepository.existsById(id)) {
//            likeRepository.deleteById(id);
//            return ResponseEntity.ok().build();
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Void> deleteLikeByUserId(@PathVariable int userId) {
        List<Like> likes = likeRepository.findByUserId(userId);
        if (!likes.isEmpty()) {
            likes.forEach(like -> likeRepository.deleteById(like.getLike_id()));
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
