package com.api.Service;

import java.util.List;

import com.api.Entity.Users;
import com.api.dto.Auth.AuthResponse;
import com.api.dto.Auth.LoginRequest;
import com.api.dto.Auth.RegisterRequest;

public interface AuthService {

    Users register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

    List<Users> findAllUsers();

}