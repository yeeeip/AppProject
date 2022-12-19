package com.nuzhd.backend.service.impl;

import com.nuzhd.backend.model.HolidayGroup;
import com.nuzhd.backend.repository.HolidayGroupRepository;
import com.nuzhd.backend.service.HolidayGroupService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HolidayGroupServiceImpl implements HolidayGroupService {
    private final HolidayGroupRepository repository;

    public HolidayGroupServiceImpl(HolidayGroupRepository respository) {
        this.repository = respository;
    }

    @Override
    public HolidayGroup create(HolidayGroup holidayGroup) {
        return repository.save(holidayGroup);
    }

    @Override
    public HolidayGroup update(HolidayGroup holidayGroup) {
        return repository.save(holidayGroup);
    }

    @Override
    public void delete(HolidayGroup holidayGroup) {
        repository.delete(holidayGroup);
    }

    @Override
    public HolidayGroup findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<HolidayGroup> findAll() {
        return repository.findAll();
    }

    @Override
    public List<HolidayGroup> findByCity(String city) {
        return repository.findByCity(city);
    }

    @Override
    public List<HolidayGroup> findByTitle(String title) {
        return repository.findByTitle(title);
    }
}
