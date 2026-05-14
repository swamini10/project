package Study.Assistant.demo.service;

import Study.Assistant.demo.entity.User;
import Study.Assistant.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {

        user.setCreatedAt(LocalDateTime.now());

        return userRepository.save(user);
    }
}