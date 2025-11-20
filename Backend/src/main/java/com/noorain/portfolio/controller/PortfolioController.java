package com.noorain.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class PortfolioController {

    @GetMapping
    public String hello() {
        return "Backend Connected Successfully...";
    }
}
