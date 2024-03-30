package tung.java.server.tweet.controller;

import java.util.Collections;
import java.util.List;

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
        tweets.forEach(tweet -> tweet.getUser());  // Load the user of each tweet
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
    @PutMapping("/tweets/{userId}")
    public ResponseEntity<?> updateTweet( @RequestBody Tweet updatedTweet, @PathVariable int userId) {
        return tweetRepository.findById(updatedTweet.getTweetId())
                .map(tweet -> {
                    if( tweet.getUserId() != userId) {
                        return new ResponseEntity<>("Unauthenticated",HttpStatus.UNAUTHORIZED);
                    }
                    tweet.setContent(updatedTweet.getContent());
                    tweetRepository.save(updatedTweet);
                    return ResponseEntity.ok(tweet);
                })
                .orElseThrow(() -> new TweetNotFoundException(updatedTweet.getTweetId()));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/tweets")
    public Tweet addNewTweet(@RequestBody Tweet tweet) {
        return tweetRepository.save(tweet);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/tweets/{userId}")
    public ResponseEntity<Void> deleteTweet(@PathVariable int userId) {
        if (tweetRepository.existsById(userId)) {
            tweetRepository.deleteById(userId);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}