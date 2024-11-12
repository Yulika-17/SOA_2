package org.firstservice.service;

import org.firstservice.model.Flat;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Predicate;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class FlatSpecification {

    public static Specification<Flat> filterBy(String field, String operator, String value) {
        return (root, query, criteriaBuilder) -> {
            switch (operator) {
                case "=":
                    return criteriaBuilder.equal(root.get(field), value);
                case "!=":
                    return criteriaBuilder.notEqual(root.get(field), value);
                case ">":
                    return criteriaBuilder.greaterThan(root.get(field), value);
                case "<":
                    return criteriaBuilder.lessThan(root.get(field), value);
                case ">=":
                    return criteriaBuilder.greaterThanOrEqualTo(root.get(field), value);
                case "<=":
                    return criteriaBuilder.lessThanOrEqualTo(root.get(field), value);
                default:
                    return null;
            }
        };
    }

    public static Specification<Flat> buildFilters(List<String> filters) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            for (String filter : filters) {
                String[] parts = filter.split("([=!><]+)", 2);
                if (parts.length < 2) {
                    continue;
                }
                String field = parts[0].trim();
                String operator = filter.substring(field.length(), field.length() + 1); // Получаем оператор
                String value = parts[1].trim();

                predicates.add(filterBy(field, operator, value).toPredicate(root, query, criteriaBuilder));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Sort buildSort(List<String> sort) {
        List<Sort.Order> orders = sort.stream()
                .map(s -> s.startsWith("<") ? Sort.Order.desc(s.substring(1)) : Sort.Order.asc(s))
                .collect(Collectors.toList());
        return Sort.by(orders);
    }

    public static Specification<Flat> createSpecification(List<String> filters) {
        if (filters == null || filters.isEmpty()) {
            return null;
        }
        return FlatSpecification.buildFilters(filters);
    }
}