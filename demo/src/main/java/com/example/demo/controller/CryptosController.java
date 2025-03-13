package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.CryptosService;
import reactor.core.publisher.Mono;


@RestController

@RequestMapping("cryptos")
public class CryptosController {

    private final CryptosService cryptosService;

    public CryptosController(CryptosService cryptosService) {
        this.cryptosService = cryptosService;
    }

    @GetMapping("")
    public Mono<ResponseEntity<List<Map<String, Object>>>> getTopCoins() {
        return cryptosService.getTopCoins()
                .map(data -> ResponseEntity.ok(data))  
                .defaultIfEmpty(ResponseEntity.notFound().build());  
    }

    @GetMapping("/top3")
    public Mono<ResponseEntity<List<Map<String, Object>>>> getTopThreeCoins() {
        return cryptosService.getTopThreeCoins()
                .map(data -> ResponseEntity.ok(data))  
                .defaultIfEmpty(ResponseEntity.notFound().build()); // Return 404 if no data found
    }
    
    
}
