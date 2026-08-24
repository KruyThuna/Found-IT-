package com.api.Entity;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Userid")
    private Long userId;

    @Column(name = "Full_name", length = 50)
    private String firstName;

    @Column(name = "Last_name", length = 50)
    private String lastName;

    @Column(name = "DateofBirth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "Email", unique = true, nullable = false, length = 100)
    private String email;

    @Column(name = "Password_hash", nullable = false, length = 100)
    private String password;

    @Column(name = "ROLE")
    private String role;

    // Default No-Argument Constructor required by JPA/Hibernate
    public Users() {
    }

    public Users(Long userId, String firstName, String lastName, LocalDate dateOfBirth, String email, String password,
            String role) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}