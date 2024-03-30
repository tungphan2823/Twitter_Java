package tung.java.server.tweet.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import tung.java.server.tweet.exception.TweetNotFoundException;

@ControllerAdvice
public class TweetNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(TweetNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String tweetNotFoundHandler(TweetNotFoundException e) {
        return e.getMessage();
    }
}
