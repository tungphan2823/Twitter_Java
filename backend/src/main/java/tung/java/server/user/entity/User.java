package tung.java.server.user.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users", schema = "public")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;
	
	@Column(name = "username")
    private String username;
	
	 @Column(name = "email")
    private String email;
	 
	 @Column(name = "password_hash")
    private String password;
	 
	  @Column(name = "day_joined") // New column: day joined
	    private java.sql.Date dayJoined;

	    public java.sql.Date getDayJoined() {
		return dayJoined;
	}
	public void setDayJoined(java.sql.Date dayJoined) {
		this.dayJoined = dayJoined;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
		@Column(name = "first_name") // New column: first name
	    private String firstName;

	    @Column(name = "last_name") // New column: last name
	    private String lastName;
	 
	 @Column(name = "profile_picture_url")
    private String profilePicture;
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public String getProfilePicture() {
		return profilePicture;
	}
	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}
	
}
