package com.nuzhd.backend;

import com.nuzhd.backend.model.HolidayGroup;
import com.nuzhd.backend.repository.HolidayGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    @Autowired
    private HolidayGroupRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(){
        return args -> {
            repository.save(new HolidayGroup("Группа 1","Описание 1", "Казань",10,"Озерный пер., д. 15 кв.23",false,true));
            repository.save(new HolidayGroup("Группа 2","Описание 2", "Москва",15,"Молодежный пер., д. 9 кв.51",true,true));
            repository.save(new HolidayGroup("Группа 3","Описание 3", "Омск",15,"Дорожная ул., д. 18 кв.107",false,false));
            repository.save(new HolidayGroup("Группа 4","Описание 4", "Самара",12,"Молодежный пер., д. 9 кв.51",true,true));
            repository.save(new HolidayGroup("Группа 5","Описание 5", "Ульяновск",11,"Калинина ул., д. 5 кв.5",true,true));
            repository.save(new HolidayGroup("Группа 6","Описание 6", "Пермь",8,"Сосновая ул., д. 13 кв.55",false,true));
            repository.save(new HolidayGroup("Группа 7","Описание 7", "Владимир",17,"Озерная ул., д. 17 кв.150",true,false));
            repository.save(new HolidayGroup("Группа 8","Описание 8", "Дзержинск",20,"Полевая ул., д. 25 кв.123",false,false));
            repository.save(new HolidayGroup("Группа 9","Описание 9", "Москва",5,"Трудовая ул., д. 19 кв.164",true,true));
            repository.save(new HolidayGroup("Группа 10","Описание 10", "Сочи",3,"Радужная ул., д. 4 кв.97",false,false));
            repository.save(new HolidayGroup("Группа 11","Описание 11", "Тула",6,"Солнечная ул., д. 23 кв.186",false,false));
            repository.save(new HolidayGroup("Группа 12","Описание 12", "Магнитогорск",9,"Железнодорожная ул., д. 10 кв.128",true,false));
            repository.save(new HolidayGroup("Группа 13","Описание 13", "Альметьевск",11,"Школьная ул., д. 9 кв.97",false,false));
            repository.save(new HolidayGroup("Группа 14","Описание 14", "Самара",15,"Хуторская ул., д. 13 кв.74",true,true));
            repository.save(new HolidayGroup("Группа 15","Описание 15", "Чита",10,"Весенняя ул., д. 2 кв.64",false,false));
            repository.save(new HolidayGroup("Группа 16","Описание 16", "Димитровград",5,"Луговая ул., д. 13 кв.83",true,false));
            repository.save(new HolidayGroup("Группа 17","Описание 17", "Тверь",8,"Строителей ул., д. 22 кв.82",false,false));
            repository.save(new HolidayGroup("Группа 18","Описание 18", "Балаково",9,"Дорожная ул., д. 12 кв.140",false,true));
            repository.save(new HolidayGroup("Группа 19","Описание 19", "Томск",10,"Минская ул., д. 25 кв.169",true,false));
            repository.save(new HolidayGroup("Группа 20","Описание 20", "Новошахтинск",13,"Ленина ул., д. 7 кв.105",true,true));
        };
    }
}
