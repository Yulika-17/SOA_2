package org.firstservice.service;

import lombok.RequiredArgsConstructor;
import org.firstservice.dto.FlatDTO;
import org.firstservice.model.Coordinates;
import org.firstservice.model.Flat;
import org.firstservice.model.House;
import org.firstservice.repository.FlatRepository;
import org.firstservice.util.enums.Transport;
import org.firstservice.util.enums.Furnish;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlatService {
    private final FlatRepository flatRepository;

    public Flat add(FlatDTO flatDTO) {
        return flatRepository.save(createFromFlatDTO(flatDTO));
    }

    public Flat findById(Integer id) {
        return flatRepository.findById(id).get();
    }
    public void update(Integer id, Flat flat) {
        Flat flatToUpdate = flatRepository.findById(id).get();

        if (flat.getName() != null)
            flatToUpdate.setName(flat.getName());

        if (flat.getCoordinates() != null) {
            Coordinates coordinates = flatToUpdate.getCoordinates();

            coordinates.setX(flat.getCoordinates().getX());
            coordinates.setY(flat.getCoordinates().getY());
        }

        if (flat.getArea() != null)
            flatToUpdate.setArea(flat.getArea());

        if (flat.getNumberOfRooms() != null)
            flatToUpdate.setNumberOfRooms(flat.getNumberOfRooms());

        if (flat.getFurnish() != null)
            flatToUpdate.setFurnish(flat.getFurnish());

        if (flat.getView() != null)
            flatToUpdate.setView(flat.getView());

        if (flat.getTransport() != null)
            flatToUpdate.setTransport(flat.getTransport());

        if (flat.getHouse() != null) {
            House house = flatToUpdate.getHouse();

            house.setName(flat.getHouse().getName());
            house.setYear(flat.getHouse().getYear());
            house.setNumberOfFlatsOnFloor(flat.getHouse().getNumberOfFlatsOnFloor());
            house.setNumberOfLifts(flat.getHouse().getNumberOfLifts());
        }
        if (flat.getPrice() != null)
            flatToUpdate.setPrice(flat.getPrice());

        flatRepository.save(flatToUpdate);
    }

    public void delete(Integer id) {
        flatRepository.deleteById(id);
    }

    public Double getAverageNumberOfRooms() {
        return flatRepository.findAverageNumberOfRooms();
    }

    public long countFlatsWithTransportGreaterThan(Transport transport) {
        List<Flat> flats = flatRepository.findAll();
        return flats.stream()
                .filter(flat -> flat.getTransport().isGreaterThan(transport))
                .count();
    }

    public List<Flat> getFlatsWithFurnishGreaterThan(Furnish furnish) {
        List<Flat> flats = flatRepository.findAll();

        return flats.stream()
                .filter(flat -> flat.getFurnish().isGreaterThan(furnish))
                .collect(Collectors.toList());
    }

    public Flat createFromFlatDTO(FlatDTO flatDTO) {

        return Flat.builder()
                .name(flatDTO.getName())
                .coordinates(flatDTO.getCoordinates())
                .area(flatDTO.getArea())
                .numberOfRooms(flatDTO.getNumberOfRooms())
                .furnish(flatDTO.getFurnish())
                .view(flatDTO.getView())
                .transport(flatDTO.getTransport())
                .house(flatDTO.getHouse())
                .price(flatDTO.getPrice())
                .creationDate(LocalDateTime.now())
                .build();
    }
}
