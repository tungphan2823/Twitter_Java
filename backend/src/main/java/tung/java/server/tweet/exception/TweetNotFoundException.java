package tung.java.server.tweet.exception;


public class TweetNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public TweetNotFoundException(int id) {
        super("Tweet not found with id: " + id);
    }
}
