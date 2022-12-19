package com.nuzhd.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "mygroup")
public class HolidayGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    private String description;

    private String city;
    private Integer participantsMax;
    private String location;
    private boolean alcoholAllowed;
    private boolean cigarettesAllowed;

    @Lob
    private byte[] photo;

    public HolidayGroup() {
    }

    public HolidayGroup(Long id, String title, String description, String city, Integer participantsMax, String location, boolean alcoholAllowed, boolean cigarettesAllowed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.city = city;
        this.participantsMax = participantsMax;
        this.location = location;
        this.alcoholAllowed = alcoholAllowed;
        this.cigarettesAllowed = cigarettesAllowed;
    }

    public HolidayGroup(String title, String description, String city, Integer participantsMax, String location, boolean alcoholAllowed, boolean cigarettesAllowed) {
        this.title = title;
        this.description = description;
        this.city = city;
        this.participantsMax = participantsMax;
        this.location = location;
        this.alcoholAllowed = alcoholAllowed;
        this.cigarettesAllowed = cigarettesAllowed;
    }

    public HolidayGroup(String title, String description, String city, Integer participantsMax, String location, boolean alcoholAllowed, boolean cigarettesAllowed, byte[] photo) {
        this.title = title;
        this.description = description;
        this.city = city;
        this.participantsMax = participantsMax;
        this.location = location;
        this.alcoholAllowed = alcoholAllowed;
        this.cigarettesAllowed = cigarettesAllowed;
        this.photo = photo;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getParticipantsMax() {
        return participantsMax;
    }

    public void setParticipantsMax(Integer participantsMax) {
        this.participantsMax = participantsMax;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isAlcoholAllowed() {
        return alcoholAllowed;
    }

    public void setAlcoholAllowed(boolean alcoholAllowed) {
        this.alcoholAllowed = alcoholAllowed;
    }

    public boolean isCigarettesAllowed() {
        return cigarettesAllowed;
    }

    public void setCigarettesAllowed(boolean cigarettesAllowed) {
        this.cigarettesAllowed = cigarettesAllowed;
    }
}
