package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableCaching
public class DemoApplication {

    @GetMapping("/")
    public String check() {
        return "Hello World";
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
