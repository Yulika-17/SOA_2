package org.firstservice.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity(name = "coordinates")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Coordinates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull(message = "Coordinates X не может быть null!")
    @Column(name = "x")
    private Integer x;

    @Column(name = "y")
    private long y;

}
