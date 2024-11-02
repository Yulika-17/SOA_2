package org.secondservice.config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


@Service
public class FirstServiceClient {

    private final WebClient webClient;

    public FirstServiceClient(@Value("${first-service.url}") String firstServiceUrl,
                              @Value("${first-service.port}") int firstServicePort) {
        this.webClient = WebClient.builder()
                .baseUrl(firstServiceUrl + ":" + firstServicePort)
                .build();
    }

    public String callFirstService() {
        return webClient.get()
                .uri("/api/v1/flats")
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
