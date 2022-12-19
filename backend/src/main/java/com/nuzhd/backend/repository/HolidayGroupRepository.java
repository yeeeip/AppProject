package com.nuzhd.backend.repository;

import com.nuzhd.backend.model.HolidayGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HolidayGroupRepository extends JpaRepository<HolidayGroup, Long> {

    List<HolidayGroup> findByTitle(String title);

    List<HolidayGroup> findByCity(String city);
}
