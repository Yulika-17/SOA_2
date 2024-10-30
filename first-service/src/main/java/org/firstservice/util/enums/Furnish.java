package org.firstservice.util.enums;

public enum Furnish {
    DESIGNER(4),
    FINE(3),
    BAD(2),
    LITTLE(1);

    private final int value;

    Furnish(int value) {
        this.value = value;
    }

    public boolean isGreaterThan(Furnish other) {
        return this.value > other.value;
    }
}