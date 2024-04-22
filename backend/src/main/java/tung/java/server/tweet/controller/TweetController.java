package tung.java.server.tweet.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tung.java.server.tweet.entity.Tweet;
import tung.java.server.tweet.exception.TweetNotFoundException;
import tung.java.server.tweet.repo.TweetRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TweetController {
    private final TweetRepository tweetRepository;

    public TweetController(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tweets")
    public List<Tweet> getAllTweets() {
        List<Tweet> tweets = tweetRepository.findAll();
        tweets.forEach(tweet -> {
            tweet.getUser();  // Load the user of each tweet
            tweet.getLikes().size();  // Load the number of likes of each tweet
        });
        return tweets;
    }

    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping("/tweets/{userId}")
//    public List<Tweet> getOneTweet(@PathVariable int userId) {
//        Tweet tweet = tweetRepository.findById(userId)
//                .orElseThrow(() -> new TweetNotFoundException(userId));
//        return Collections.singletonList(tweet);
//    }
    @GetMapping("/tweets/{userId}")
    public List<Tweet> getTweetsByUser(@PathVariable int userId) {
        return tweetRepository.findByUserId(userId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tweets/{userId}/{tweetId}")
    public ResponseEntity<Tweet> getTweetByUserAndId(@PathVariable int userId, @PathVariable int tweetId) {
        Optional<Tweet> tweetOptional = tweetRepository.findById(tweetId);
        if (tweetOptional.isPresent()) {
            Tweet tweet = tweetOptional.get();
            if (tweet.getUserId() != userId) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            } else {
                return new ResponseEntity<>(tweet, HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/tweets/{tweetId}")
    public ResponseEntity<?> updateTweetById(@RequestBody Tweet updatedTweet, @PathVariable int tweetId) {
        return tweetRepository.findById(tweetId)
                .map(tweet -> {
                    tweet.setContent(updatedTweet.getContent());
                    tweetRepository.save(tweet);
                    return ResponseEntity.ok(tweet);
                })
                .orElseThrow(() -> new TweetNotFoundException(tweetId));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/tweets")
    public Tweet addNewTweet(@RequestBody Tweet tweet) {
        return tweetRepository.save(tweet);
    }

//    @CrossOrigin(origins = "http://localhost:3000")
//    @DeleteMapping("/tweets/{userId}")
//    public ResponseEntity<Void> deleteTweet(@PathVariable int userId) {
//        if (tweetRepository.existsById(userId)) {
//            tweetRepository.deleteById(userId);
//            return ResponseEntity.ok().build();
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/tweets/{tweetId}")
    public ResponseEntity<Void> deleteTweetById(@PathVariable int tweetId) {
        if (tweetRepository.existsById(tweetId)) {
            tweetRepository.deleteById(tweetId);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
