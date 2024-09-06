package com.JD_4_Futureintern.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
}