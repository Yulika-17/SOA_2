package org.firstservice.controller;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.firstservice.exception.ErrorDefault;
import org.firstservice.exception.ErrorIQP;
import org.firstservice.exception.ErrorISE;
import org.firstservice.model.Flat;
import org.firstservice.service.AdditionalOperationsService;
import org.firstservice.util.enums.Furnish;
import org.firstservice.util.enums.Transport;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/flats", produces = MediaType.APPLICATION_XML_VALUE)
public class AdditionalOperationsController {

    public final AdditionalOperationsService additionalOperationsService;

    @GetMapping("/average-number-of-rooms")
    public ResponseEntity<?> getAverageNumberOfRooms() {
        try {
            Double averageRooms = additionalOperationsService.getAverageNumberOfRooms();

            if (averageRooms == null) {
                ErrorDefault errorResponse = new ErrorDefault("No flats available for calculation");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }
            return ResponseEntity.ok(averageRooms);
        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/count-by-transport")
    public ResponseEntity<?> countFlatsWithTransportGreaterThan(@RequestParam Transport transport) {
        try {
            long count = additionalOperationsService.countFlatsWithTransportGreaterThan(transport);

            return ResponseEntity.ok(count);
        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (EntityNotFoundException e) {
            ErrorDefault errorResponse = new ErrorDefault("No flats found with transport level greater than specified");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/filter-by-furnish")
    public ResponseEntity<?> getFlatsWithFurnishGreaterThan(@RequestParam Furnish furnish) {
        try {
            List<Flat> flats = additionalOperationsService.getFlatsWithFurnishGreaterThan(furnish);

            if (flats.isEmpty()) {
                ErrorDefault errorResponse = new ErrorDefault("No flats found with furnish level greater than specified");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }

            return ResponseEntity.ok(flats);

        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
