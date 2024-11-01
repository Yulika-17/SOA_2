package org.secondservice.service;

import lombok.RequiredArgsConstructor;
import org.secondservice.model.Flat;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AgencyService {

    private final RestTemplate restTemplate;

    @Value("${first-service.url}")
    private String FIRST_SERVICE_URL;

    @Value("${first-service.port}")
    private Integer FIRST_SERVICE_PORT;
    public Long getMostExpensiveFlat(long id1, long id2, long id3) {
        String url1 = String.format("%s:%d/api/v1/flats/%d", FIRST_SERVICE_URL, FIRST_SERVICE_PORT, id1);
        String url2 = String.format("%s:%d/api/v1/flats/%d", FIRST_SERVICE_URL, FIRST_SERVICE_PORT, id2);
        String url3 = String.format("%s:%d/api/v1/flats/%d", FIRST_SERVICE_URL, FIRST_SERVICE_PORT, id3);

        Flat flat1 = getFlatFromService(url1);
        Flat flat2 = getFlatFromService(url2);
        Flat flat3 = getFlatFromService(url3);

        return findMostExpensive(flat1, flat2, flat3);
    }

    private Flat getFlatFromService(String url) {
        ResponseEntity<Flat> response = restTemplate.getForEntity(url, Flat.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            return response.getBody();
        } else {
            throw new RuntimeException("Failed to retrieve flat from first service");
        }
    }

    private long findMostExpensive(Flat flat1, Flat flat2, Flat flat3) {
        Flat mostExpensive = flat1;

        if (flat2.getPrice() > mostExpensive.getPrice()) {
            mostExpensive = flat2;
        }
        if (flat3.getPrice() > mostExpensive.getPrice()) {
            mostExpensive = flat3;
        }

        return mostExpensive.getId();
    }

    public List<Flat> getFlatsOrderedByTimeToMetro(boolean byTransport, boolean desc) {
        String url = String.format("%s:%d/api/v1/flats/all", FIRST_SERVICE_URL, FIRST_SERVICE_PORT);
        ResponseEntity<Flat[]> response = restTemplate.getForEntity(url, Flat[].class);

        if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
            throw new RuntimeException("Failed to retrieve list of flats from first service");
        }

        List<Flat> flats = Arrays.asList(response.getBody());

        Comparator<Flat> comparator = byTransport
                ? Comparator.comparing(Flat::getTimeToMetroByTransport)
                : Comparator.comparing(Flat::getTimeToMetroByFoot);

        if (desc) {
            comparator = comparator.reversed();
        }

        return flats.stream()
                .sorted(comparator)
                .collect(Collectors.toList());
    }
}
