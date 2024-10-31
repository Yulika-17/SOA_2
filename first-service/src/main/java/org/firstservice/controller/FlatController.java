package org.firstservice.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.firstservice.dto.FlatDTO;
import org.firstservice.model.Flat;
import org.firstservice.service.FlatService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/flats", produces = MediaType.APPLICATION_XML_VALUE)
public class FlatController {

    public final FlatService flatService;

    @PostMapping()
    public void createFLat(@Valid @RequestBody FlatDTO flatDTO) {
        flatService.add(flatDTO);
    }

    @GetMapping("/{id}")
    public Flat getFlat(@PathVariable int id) {
        return flatService.findById(id);
    }

    @PutMapping("/{id}")
    public void updateFlat(
            @PathVariable Integer id,
            @Valid @RequestBody FlatDTO flatDTO
    ) {
        Flat updatedFlat = flatService.createFromFlatDTO(flatDTO);
        flatService.update(id, updatedFlat);
    }

    @DeleteMapping("/{id}")
    public void deleteFlat(@PathVariable int id) {
        flatService.delete(id);
    }
}
