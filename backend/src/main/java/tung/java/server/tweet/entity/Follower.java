package tung.java.server.tweet.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "followers")
public class Follower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "track_id")
    private int track_id;
    @Column(name = "follower_id")
    private int followerId;


    public int getFollowerId() {
		return followerId;
	}

	public void setFollowerId(int followerId) {
		this.followerId = followerId;
	}

	@Column(name = "following_id")
    private int following_id;

    public int getTrack_id() {
		return track_id;
	}

	public void setTrack_id(int track_id) {
		this.track_id = track_id;
	}



    public int getFollowing_id() {
        return following_id;
    }

    public void setFollowing_id(int following_id) {
        this.following_id = following_id;
    }
}
