package org.firstservice.controller;

import lombok.RequiredArgsConstructor;
import org.firstservice.model.Flat;
import org.firstservice.service.FlatService;
import org.firstservice.util.enums.Furnish;
import org.firstservice.util.enums.Transport;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/flats", produces = MediaType.APPLICATION_XML_VALUE)
public class AdditionalOperationsController {

    public final FlatService flatService;

    @GetMapping("/average-number-of-rooms")
    public Double getAverageNumberOfRooms() {
        return flatService.getAverageNumberOfRooms();
    }

    @GetMapping("/count-by-transport")
    public long countFlatsWithTransportGreaterThan(@RequestParam Transport transport) {
        return flatService.countFlatsWithTransportGreaterThan(transport);
    }

    @GetMapping("/filter-by-furnish")
    public List<Flat> getFlatsWithFurnishGreaterThan(@RequestParam Furnish furnish) {
        return flatService.getFlatsWithFurnishGreaterThan(furnish);
    }
}
