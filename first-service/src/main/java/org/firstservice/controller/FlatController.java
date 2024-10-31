package org.firstservice.controller;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.firstservice.dto.FlatDTO;
import org.firstservice.dto.FlatsDTO;
import org.firstservice.exception.ErrorDefault;
import org.firstservice.exception.ErrorIQP;
import org.firstservice.exception.ErrorISE;
import org.firstservice.model.Flat;
import org.firstservice.service.FlatService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/flats", produces = MediaType.APPLICATION_XML_VALUE)
public class FlatController {

    public final FlatService flatService;

    @GetMapping()
    public ResponseEntity<Page<FlatsDTO>> getFlats(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "5") Integer size,
            @RequestParam(required = false) List<String> sort,
            @RequestParam(required = false) List<String> filter) {

        try {
            Page<FlatsDTO> flats = flatService.getFlats(page, size, sort, filter);

            if (flats.isEmpty()) {
                ErrorDefault errorResponse = new ErrorDefault("No flats found for the specified filters.");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body((Page<FlatsDTO>) errorResponse);
            }

            return ResponseEntity.ok(flats);
        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body((Page<FlatsDTO>) errorResponse);
        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body((Page<FlatsDTO>) errorResponse);
        }
    }

    @PostMapping()
    public ResponseEntity<?> createFlat(@Valid @RequestBody FlatDTO flatDTO) {
        try {
            flatService.add(flatDTO);

            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getFlat(@PathVariable int id) {
        try {
            Flat flat = flatService.findById(id);

            if (flat == null) {
                ErrorDefault errorResponse = new ErrorDefault("Flat not found with ID: " + id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }

            return ResponseEntity.ok(flat);

        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);

        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFlat(
            @PathVariable Integer id,
            @Valid @RequestBody FlatDTO flatDTO
    ) {
        try {
            // Проверка на существование квартиры по ID
            Optional<Flat> existingFlat = Optional.ofNullable(flatService.findById(id));
            if (existingFlat.isEmpty()) {
                // Ответ с кодом 404, если квартира не найдена
                ErrorDefault errorResponse = new ErrorDefault("Flat not found with ID: " + id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }

            // Создаем обновленную квартиру и выполняем обновление
            Flat updatedFlat = flatService.createFromFlatDTO(flatDTO);
            flatService.update(id, updatedFlat);

            // Возвращаем обновленную квартиру с кодом 200
            return ResponseEntity.ok(updatedFlat);

        } catch (IllegalArgumentException e) {
            // Обработка ошибки некорректного параметра запроса, возвращает код 400
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);

        } catch (Exception e) {
            // Общая обработка для внутренних ошибок сервера, возвращает код 500
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFlat(@PathVariable int id) {
        try {
            flatService.delete(id);

            Map<String, Object> response = new HashMap<>();
            response.put("code", 204);
            response.put("message", "The flat was successfully deleted");
            response.put("time", ZonedDateTime.now(ZoneOffset.UTC).toString());

            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(response);

        } catch (IllegalArgumentException e) {
            ErrorIQP errorResponse = new ErrorIQP("Invalid query parameter: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);

        } catch (EntityNotFoundException e) {
            ErrorDefault errorResponse = new ErrorDefault("Flat not found with ID: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);

        } catch (Exception e) {
            ErrorISE errorResponse = new ErrorISE("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

}
