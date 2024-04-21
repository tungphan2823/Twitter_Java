package tung.java.server.tweet.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "comments")
public class Comment {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "comment_id")
	    private int comment_id;

	    @Column(name = "tweet_id")
	    private int tweet_id;

	    @Column(name = "user_id")
	    private int user_id;

	    @Column(name = "comment")
	    private String comment;

	    @Column(name = "timestamp", nullable = false)
	    private Timestamp timestamp;

		public int getComment_id() {
			return comment_id;
		}

		public void setComment_id(int comment_id) {
			this.comment_id = comment_id;
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

		public String getComment() {
			return comment;
		}

		public void setComment(String comment) {
			this.comment = comment;
		}

		public Timestamp getTimestamp() {
			return timestamp;
		}

		public void setTimestamp(Timestamp timestamp) {
			this.timestamp = timestamp;
		}
}
