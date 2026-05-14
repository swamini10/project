package Study.Assistant.demo.Controller;

import Study.Assistant.demo.dto.LoginRequest;
import Study.Assistant.demo.dto.LoginResponse;
import Study.Assistant.demo.entity.User;
import Study.Assistant.demo.repository.UserRepository;
import Study.Assistant.demo.service.AuthService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {

        return authService.register(user);
    }

     @Autowired
    private UserRepository userRepository;
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        // ❌ Email not found
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("Email not registered ❌", false));
        }

        User user = userOpt.get();

        // ❌ Wrong password
        if (!user.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("Invalid password ❌", false));
        }

        // ✅ Success
        return ResponseEntity.ok(
                new LoginResponse("Login successful ✅", true)
        );
    }
}