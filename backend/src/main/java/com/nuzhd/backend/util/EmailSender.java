package com.nuzhd.backend.util;

import com.nuzhd.backend.model.HolidayGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

@Component
@CrossOrigin
public class EmailSender {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String emailTo, HolidayGroup group) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("appnotificationbot@gmail.com");
        message.setTo(emailTo);
        message.setText(String.format("""
                        Спасибо, что воспользовались нашим сервисом! Вот информация о вашей компании:
                        Название: %s
                        Описание: %s
                        Город: %s
                        Количество участников: %d
                        Место встречи: %s
                        Алкоголь приветствуется: %s
                        Курение приветствуется: %s""",
                group.getTitle(), group.getDescription(), group.getCity(), group.getParticipantsMax(),
                group.getLocation(), group.isAlcoholAllowed() ? "Да" : "Нет", group.isCigarettesAllowed() ? "Да" : "Нет"));
        message.setSubject("Новое уведомление");

        javaMailSender.send(message);

        System.out.println("Send email to: " + emailTo);
    }
}
