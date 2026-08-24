package com.api.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SwaggerConfig {
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

                http
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(auth -> auth
                                                // Swagger
                                                .requestMatchers(
                                                                "/swagger-ui/**",
                                                                "/swagger-ui.html",
                                                                "/v3/api-docs/**")
                                                .permitAll()

                                                .requestMatchers(
                                                                "/api/**",
                                                                "/",
                                                                "/login",
                                                                "/login.html",
                                                                "/dashboard",
                                                                "/dashboard.html")
                                                .permitAll()

                                                // Other requests require authentication
                                                .anyRequest().authenticated());

                return http.build();
        }
}