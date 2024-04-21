package tung.java.server.tweet.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tung.java.server.tweet.entity.Comment;

import tung.java.server.tweet.repo.CommentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CommentController {
    private final CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/comments")
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/comments/{commentId}")
    public ResponseEntity<Comment> getCommentById(@PathVariable int commentId) {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);
        if (commentOptional.isPresent()) {
            return new ResponseEntity<>(commentOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/comments/{commentId}")
    public ResponseEntity<?> updateComment(@RequestBody Comment updatedComment, @PathVariable int commentId) {
        return commentRepository.findById(commentId)
                .map(comment -> {
                    comment.setComment(updatedComment.getComment());
                    commentRepository.save(comment);
                    return ResponseEntity.ok(comment);
                })
                .orElseThrow();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/comments")
    public Comment addNewComment(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable int commentId) {
        if (commentRepository.existsById(commentId)) {
            commentRepository.deleteById(commentId);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
