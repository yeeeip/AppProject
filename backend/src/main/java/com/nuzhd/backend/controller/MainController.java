package com.nuzhd.backend.controller;

import com.nuzhd.backend.model.HolidayGroup;
import com.nuzhd.backend.service.HolidayGroupService;
import com.nuzhd.backend.util.EmailSender;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSendException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/groups")
public class MainController {

    private final HolidayGroupService holidayGroupService;
    private final EmailSender emailSender;

    public MainController(HolidayGroupService holidayGroupService, EmailSender emailSender) {
        this.holidayGroupService = holidayGroupService;
        this.emailSender = emailSender;
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<HolidayGroup> createGroup(@RequestBody HolidayGroup group) {
        HolidayGroup createdGroup = holidayGroupService.create(group);

        if (createdGroup == null) {
            return ResponseEntity.internalServerError().build();
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HolidayGroup> showGroup(@PathVariable("id") Long id) {
        HolidayGroup group = holidayGroupService.findById(id);

        if (group == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(group);
    }

    @GetMapping
    public ResponseEntity<List<HolidayGroup>> showAllGroups() {

        List<HolidayGroup> groups = holidayGroupService.findAll();

        return ResponseEntity.ok(groups);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/{id}/join")
    public ResponseEntity<String> sendEmailOnJoin(@PathVariable("id") Long groupId, @RequestBody HashMap<String, String> email) {

        HolidayGroup group = holidayGroupService.findById(groupId);

        if (group == null) {
            return ResponseEntity.notFound().build();
        }

        try {
            emailSender.sendEmail(email.get("email"), group);
        } catch (MailSendException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/findByTitle")
    public ResponseEntity<List<HolidayGroup>> groupsByTitle(@RequestParam("title") String title) {

        String finalTitle = title.toLowerCase();

        List<HolidayGroup> groupsByTitle = holidayGroupService.findAll().stream().filter(g -> g.getTitle().toLowerCase().contains(finalTitle)).collect(Collectors.toList());

        return ResponseEntity.ok(groupsByTitle);
    }
}
