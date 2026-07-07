package com.example.demo.controller;

import lombok.RequiredArgsConstructor;
import com.example.demo.service.GeminiService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class GeminiController {

    private final GeminiService geminiService;

    @GetMapping("/chat")
    public String chat(@RequestParam("message") String message) {
        return geminiService.ask(message);
    }
}