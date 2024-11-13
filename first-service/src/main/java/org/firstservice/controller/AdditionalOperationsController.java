package org.firstservice.controller;

import lombok.RequiredArgsConstructor;
import org.firstservice.exception.ErrorDefault;
import org.firstservice.model.Flat;
import org.firstservice.service.AdditionalOperationsService;
import org.firstservice.util.enums.Furnish;
import org.firstservice.util.enums.Transport;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/flats", produces = MediaType.APPLICATION_XML_VALUE)
public class AdditionalOperationsController {

    private final AdditionalOperationsService additionalOperationsService;

    @GetMapping("/average-number-of-rooms")
    public ResponseEntity<?> getAverageNumberOfRooms() {
        Double averageRooms = additionalOperationsService.getAverageNumberOfRooms();

        if (averageRooms == null) {
            ErrorDefault errorResponse = new ErrorDefault("No flats available for calculation");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        return ResponseEntity.ok(averageRooms);
    }

    @GetMapping("/count-by-transport")
    public ResponseEntity<?> countFlatsWithTransportGreaterThan(@RequestParam Transport transport) {
        long count = additionalOperationsService.countFlatsWithTransportGreaterThan(transport);
        if (count == 0) {
            ErrorDefault errorResponse = new ErrorDefault("No flats found with transport level greater than specified");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        return ResponseEntity.ok(count);
    }

    @GetMapping("/filter-by-furnish")
    public ResponseEntity<?> getFlatsWithFurnishGreaterThan(@RequestParam Furnish furnish) {
        List<Flat> flats = additionalOperationsService.getFlatsWithFurnishGreaterThan(furnish);

        if (flats.isEmpty()) {
            ErrorDefault errorResponse = new ErrorDefault("No flats found with furnish level greater than specified");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }

        return ResponseEntity.ok(flats);
    }
}
