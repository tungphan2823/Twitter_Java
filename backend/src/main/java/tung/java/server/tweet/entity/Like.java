package tung.java.server.tweet.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "likes")
public class Like {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "like_id")
	 private int like_id;
	private int tweet_id;
	private int user_id;
    @Column(name = "timestamp", nullable = false)
    private Timestamp timestamp;
	public int getLike_id() {
		return like_id;
	}
	public void setLike_id(int like_id) {
		this.like_id = like_id;
	}
	public int getTweet_id() {
		return tweet_id;
	}
	public void setTweet_id(int tweet_id) {
		this.tweet_id = tweet_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

}
