package tung.java.server.user.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import tung.java.server.user.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {
	User findByEmail(String email);
	
}	
