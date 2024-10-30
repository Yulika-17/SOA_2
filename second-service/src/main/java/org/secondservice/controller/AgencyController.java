package org.secondservice.controller;

import lombok.RequiredArgsConstructor;
import org.secondservice.service.AgencyService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/agency", produces = MediaType.APPLICATION_XML_VALUE, consumes = MediaType.APPLICATION_XML_VALUE)
public class AgencyController {

    private final AgencyService agencyService;

    @GetMapping("/get-most-expensive/{id1}/{id2}/{id3}")
    public ResponseEntity<Long> getMostExpensiveFlat(
            @PathVariable Long id1,
            @PathVariable Long id2,
            @PathVariable Long id3
    ) {
        Long mostExpensiveFlatId = agencyService.getMostExpensiveFlat(id1, id2, id3);
        return new ResponseEntity<>(mostExpensiveFlatId, HttpStatus.OK);
    }

}