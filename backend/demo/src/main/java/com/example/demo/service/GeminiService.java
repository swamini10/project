package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

@Service
public class GeminiService {

    private final String apiKey;
    private final String model;
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    private final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models";

    public GeminiService(@Value("${spring.ai.google.genai.api-key}") String apiKey,
                        @Value("${spring.ai.google.genai.chat.options.model:gemini-2.5-flash}") String model) {
        this.apiKey = apiKey;
        this.model = model;
        this.restTemplate = new RestTemplate();
        this.objectMapper = new ObjectMapper();
    }

    @SuppressWarnings("unchecked")
    public String ask(String question) {
        try {
            String url = String.format("%s/%s:generateContent?key=%s", GEMINI_API_URL, model, apiKey);
            
            Map<String, Object> request = new HashMap<>();
            Map<String, Object> content = new HashMap<>();
            Map<String, Object> parts = new HashMap<>();
            
            parts.put("text", question);
            content.put("parts", new Object[]{parts});
            request.put("contents", new Object[]{content});
            
            String response = restTemplate.postForObject(url, request, String.class);
            
            Map<String, Object> responseMap = objectMapper.readValue(response, Map.class);
            return extractResponseText(responseMap);
        } catch (HttpClientErrorException e) {
            if (e.getStatusCode() == HttpStatus.TOO_MANY_REQUESTS) {
                return " quota exceeded.";
            }
            return "Error: " + e.getStatusCode() + " " + e.getStatusText();
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
    
    @SuppressWarnings("unchecked")
    private String extractResponseText(Map<String, Object> responseMap) {
        try {
            if (responseMap.containsKey("candidates")) {
                List<?> candidates = (List<?>) responseMap.get("candidates");
                if (!candidates.isEmpty()) {
                    Map<String, Object> candidate = (Map<String, Object>) candidates.get(0);
                    if (candidate.containsKey("content")) {
                        Map<String, Object> content = (Map<String, Object>) candidate.get("content");
                        if (content.containsKey("parts")) {
                            List<?> parts = (List<?>) content.get("parts");
                            if (!parts.isEmpty()) {
                                Map<String, Object> part = (Map<String, Object>) parts.get(0);
                                return part.getOrDefault("text", "No response").toString();
                            }
                        }
                    }
                }
            }
            return "Unable to parse response";
        } catch (Exception e) {
            return "Error parsing response: " + e.getMessage();
        }
    }
}
