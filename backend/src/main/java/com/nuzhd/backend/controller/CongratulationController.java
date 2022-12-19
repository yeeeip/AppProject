package com.nuzhd.backend.controller;

import com.nuzhd.backend.service.CongratulationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/congratulation")
public class CongratulationController {

    private final CongratulationService congratulationService;

    public CongratulationController(CongratulationService congratulationService) {
        this.congratulationService = congratulationService;
    }

    @CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
    @GetMapping
    public ResponseEntity<String> getCongratulation() {

        String congratulation;

        try {
            congratulation = congratulationService.getCongratulation();
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.internalServerError().build();
        }

        return ResponseEntity.ok(congratulation);
    }

}
