package com.api.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.Entity.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findByUserUserId(Long userId);

}