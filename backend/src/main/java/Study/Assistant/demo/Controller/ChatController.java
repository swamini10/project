package study.assistant.demo.controller;

import study.assistant.demo.model.ChatRequest;
import study.assistant.demo.model.ChatResponse;
import study.assistant.demo.service.AIService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {

    private final AIService aiService;

    public ChatController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping
    public ChatResponse chat(
            @RequestBody ChatRequest request
    ) {

        String reply =
                aiService.getAIResponse(request.getMessage());

        return new ChatResponse(reply);
    }
}