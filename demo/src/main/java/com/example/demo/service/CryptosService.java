package com.example.demo.service;

import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class CryptosService {

    private final WebClient webClient;  

    public CryptosService(WebClient webClient) {
        this.webClient = webClient;  
    }


   @Cacheable(value = "topCoinsCache")
    public Mono<List<Map<String, Object>>> getTopCoins() {
        System.out.println("Fetching data from API...");
        return webClient.get()
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Map<String, Object>>>(){}); // This directly returns the data as List<Map<String, Object>>
    }

    @Cacheable(value = "topThreeCoinsCache") 
    public Mono<List<Map<String, Object>>> getTopThreeCoins() {
        return webClient.get()
                .retrieve()
                .bodyToMono(List.class)
                .map(this::getTopThreeCoinsFromResponse);
         }


    private List<Map<String, Object>> getTopThreeCoinsFromResponse(List<Map<String, Object>> coins) {
        return coins.stream()
                .sorted((coin1, coin2) -> {
                    Double variation1 = (Double) coin1.get("price_change_percentage_24h");
                    Double variation2 = (Double) coin2.get("price_change_percentage_24h");
                    return variation2.compareTo(variation1);
                })
                .limit(3)
                .collect(Collectors.toList());
    }

}
