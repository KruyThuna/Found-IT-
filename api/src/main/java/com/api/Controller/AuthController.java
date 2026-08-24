package com.api.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.Entity.Users;
import com.api.Repo.UserRepository;
import com.api.Service.AuthService;
import com.api.dto.Auth.AuthResponse;
import com.api.dto.Auth.LoginRequest;
import com.api.dto.Auth.RegisterRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;

    public AuthController(AuthService authService, UserRepository userRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
    }

    // Register User
    @PostMapping("/register")
    public ResponseEntity<Users> register(@RequestBody RegisterRequest request) {
        Users user = authService.register(request);
        return ResponseEntity.ok(user);
    }

    // Login User
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        AuthResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = authService.findAllUsers();
        return ResponseEntity.ok(users);
    }

}