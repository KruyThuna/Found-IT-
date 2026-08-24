package com.api.Service.implement;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.api.Entity.Users;
import com.api.Repo.UserRepository;
import com.api.Service.AuthService;
import com.api.dto.Auth.AuthResponse;
import com.api.dto.Auth.LoginRequest;
import com.api.dto.Auth.RegisterRequest;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncode;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncode = passwordEncoder;

    }

    @Override
    public Users register(RegisterRequest request) {
        // Check Email User Login
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists ");
        }
        // Create New User
        Users user = new Users(null, null, null, null, null, null, null);
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncode.encode(request.getPassword()));
        user.setRole("USER");
        return userRepository.save(user);

    }

    @Override
    public AuthResponse login(LoginRequest request) {
        // // Find User
        // Users user = userRepository.findByEmail(request.getEmail()).orElseThrow(

        // () -> new RuntimeException("User not Found !"));
        // // check password
        // Boolean passwordMatch = passwordEncode.matches(
        // request.getPassword(),
        // user.getPassword());
        // if (!passwordMatch) {
        // throw new RuntimeException("Invalid email or password ");
        // }

        return new AuthResponse("Login Suceessful..", null);

    }

    @Override
    public List<Users> findAllUsers() {
        return userRepository.findAll();
    }

}
