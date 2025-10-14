package io.github.ssalih755.service;


import io.github.ssalih755.model.NeoFeedResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class NEOService {

    private RestTemplate template = new RestTemplate();

    private final String API_URL="https://api.nasa.gov/neo/rest/v1/feed";

    private final String API_KEY;

    // No-arg constructor for CLI
    public NEOService() {
        this.API_KEY = System.getenv("NASA_API_KEY");

    }

    // Constructor for Spring (web app)
    @Autowired
    public NEOService(@Value("${nasa.api.key:}") String apiKeyFromSpring) {
        if (apiKeyFromSpring != null && !apiKeyFromSpring.isEmpty()) {
            this.API_KEY = apiKeyFromSpring;

        } else {
            // Fallback for CLI or if env var not set in Spring context
            this.API_KEY = System.getenv("NASA_API_KEY");

        }

    }



    public NeoFeedResponse getNEOData(String startDate, String endDate){
        String url = API_URL +
                "?start_date=" + startDate +
                "&end_date=" + endDate +
                "&api_key=" + API_KEY;
//        String response = template.getForObject(url, String.class).toString();
//        System.out.println(response);
        NeoFeedResponse response =
                template.getForObject(url, NeoFeedResponse.class);

        return response;

    }
}
