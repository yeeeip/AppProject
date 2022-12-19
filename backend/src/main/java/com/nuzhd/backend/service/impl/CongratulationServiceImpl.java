package com.nuzhd.backend.service.impl;

import com.nuzhd.backend.service.CongratulationService;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@Service
public class CongratulationServiceImpl implements CongratulationService {

    @Override
    public String getCongratulation() throws ExecutionException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(SERVICE_URL + "/api/tost/"))
                .GET()
                .build();

        CompletableFuture<HttpResponse<String>> response = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());

        return response.get().body();
    }
}
