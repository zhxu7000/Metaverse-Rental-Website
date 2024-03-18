package com.example.server.service.impl;

import com.example.server.mapper.AppointmentMapper;
import com.example.server.mapper.UserMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    private static final Logger logger = LoggerFactory.getLogger(MailService.class);
    @Autowired
    UserMapper userMapper;
    @Autowired
    AppointmentMapper appointmentMapper;

//    public String sendTextEmail(int id, int userid) throws IOException {
//        User user = userMapper.selectUserById(userid);
//        Appointment appointment = appointmentMapper.selectAppointmentById(id);
//
//        Email from = new Email("lzhe7349@uni.sydney.edu.au");
//        String subject = "The subject";
//        String mailcontent = "Hi! " + user.getUsername() + ", You has made appointment successfully. Your appointment time is " + appointment.getTime() +".";
//        Email to = new Email(user.getEmail());
//        Content content = new Content("text/plain", mailcontent);
//        Mail mail = new Mail(from, subject, to, content);
//
//        SendGrid sg = new SendGrid("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");
//        Request request = new Request();
//        try {
//            request.setMethod(Method.POST);
//            request.setEndpoint("mail/send");
//            request.setBody(mail.build());
//            Response response = sg.api(request);
//            logger.info(response.getBody());
//            return response.getBody();
//        } catch (IOException ex) {
//            throw ex;
//        }
//    }
}