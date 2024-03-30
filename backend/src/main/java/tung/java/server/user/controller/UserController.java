package tung.java.server.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import tung.java.server.user.entity.User;
import tung.java.server.user.exception.UserNotFoundException;
import tung.java.server.user.repo.UserRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepo userRepo;

    @Autowired
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getOneUser(@PathVariable Long id) {
        User user = userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        User user = userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));

        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        
        user.setProfilePicture(updatedUser.getProfilePicture());
        user.setDayJoined(updatedUser.getDayJoined()); // Set day joined
        user.setFirstName(updatedUser.getFirstName()); // Set first name
        user.setLastName(updatedUser.getLastName()); // Set last name

        User savedUser = userRepo.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping
    public ResponseEntity<User> addNewUser(@RequestBody User user) {
        User savedUser = userRepo.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
