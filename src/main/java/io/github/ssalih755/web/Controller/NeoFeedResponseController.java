package io.github.ssalih755.web.Controller;

import io.github.ssalih755.model.NeoFeedResponse;
import io.github.ssalih755.service.NEOService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@CrossOrigin
@RestController
@RequestMapping("/neoData")

public class NeoFeedResponseController {
    private final NEOService neoService;

    public NeoFeedResponseController(NEOService neoService) {
        this.neoService = neoService;
    }

    @GetMapping
    public NeoFeedResponse getNeoFeedResponse() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String dateString = now.format(formatter);
        return neoService.getNEOData(dateString);
    }

}
