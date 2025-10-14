package io.github.ssalih755.web.Controller;

import io.github.ssalih755.model.NeoFeedResponse;
import io.github.ssalih755.service.NEOService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/neoData")

public class NeoFeedResponseController {
    private final NEOService neoService;
    private static final Logger logger = LoggerFactory.getLogger(NeoFeedResponse.class);

    public NeoFeedResponseController(NEOService neoService) {
        this.neoService = neoService;
    }

    @GetMapping
    public NeoFeedResponse getNeoFeedResponse(@RequestParam(name = "startDate", required = false) Optional<String> startDate,
                                              @RequestParam(name = "endDate", required = false) Optional<String> endDate)
    {
        // Use startDate if present, otherwise default to today
        String strDate = startDate.orElse(
                LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        String eDate = endDate.orElse(LocalDate.parse(strDate).plusDays(7).format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        logger.info("Fetching NEO data for date: " + strDate);
        logger.info("Fetching NEO data for end date: " + endDate);
        return neoService.getNEOData(strDate, eDate);
    }


}
