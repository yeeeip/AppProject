package com.nuzhd.backend.service;

import java.util.concurrent.ExecutionException;

public interface CongratulationService {

    final String SERVICE_URL = "http://localhost:8050/";

    public String getCongratulation() throws ExecutionException, InterruptedException;

}
