package com.api.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.api.Entity.Users;

/**
 * UserRepository
 */
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    boolean existsByEmail(String email);

    Users save(Users user);

    Object findByEmail(String email);

    @Query(value = "SELECT * FORM users", nativeQuery = true)
    List<Users> findAllUsers();

   

}
