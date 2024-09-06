package Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RestController("/")
public class GameController {

    @GetMapping("game")
    public String index() {
        return "index";
    }
}
