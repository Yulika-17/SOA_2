package org.firstservice.service;

import lombok.RequiredArgsConstructor;
import org.firstservice.model.Flat;
import org.firstservice.repository.FlatRepository;
import org.firstservice.util.enums.Furnish;
import org.firstservice.util.enums.Transport;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class AdditionalOperationsService {

    private final FlatRepository flatRepository;

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
}
