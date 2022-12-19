package com.nuzhd.backend.service;


import com.nuzhd.backend.model.HolidayGroup;

import java.util.List;

public interface HolidayGroupService {

    HolidayGroup create(HolidayGroup holidayGroup);
    HolidayGroup update(HolidayGroup holidayGroup);
    void delete(HolidayGroup holidayGroup);
    HolidayGroup findById(Long id);

    List<HolidayGroup> findAll();

    List<HolidayGroup> findByCity(String city);

    List<HolidayGroup> findByTitle(String title);
}
