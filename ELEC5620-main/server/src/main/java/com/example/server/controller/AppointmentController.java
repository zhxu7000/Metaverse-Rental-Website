package com.example.server.controller;

import com.example.server.Utils.JSONResult;
import com.example.server.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping("/appointment")
public class AppointmentController{
    @Autowired
    AppointmentService appointmentService;

    @GetMapping("/")
    public JSONResult getAppointmentById(@RequestParam("id") Integer id){
        return appointmentService.queryAppointmentById(id);
    }

    @GetMapping("/all")
    public JSONResult getAllAppointment() {
        JSONResult result = appointmentService.findAllAppointment();
        return result;
    }

    @GetMapping("/available")
    public JSONResult getAvailableAppointment() {
        JSONResult result = appointmentService.findAvailableAppointment();
        return result;
    }

    @GetMapping("/user")
    public JSONResult getUserAppointment(@RequestParam("id") Integer id){
        JSONResult result = appointmentService.findUserAppointment(id);
        return result;
    }

    @GetMapping("/landlord")
    public JSONResult getLandlordAppointment(@RequestParam("id") Integer landlordId){
        JSONResult result = appointmentService.findLandlordAppointment(landlordId);
        return result;
    }

    @GetMapping("/landlordWait")
    public JSONResult getLandlordWaitAppointment(@RequestParam("id") Integer landlordId){
        JSONResult result = appointmentService.findWaitLandlordAppointment(landlordId);
        return result;
    }

    @GetMapping("/doAppoint")
    public JSONResult doAppointment(@RequestParam("id") Integer id, @RequestParam("houseid") Integer houseid) throws IOException {
        return appointmentService.MakeAppointment(id, houseid);
    }

    @GetMapping("/cancel")
    public JSONResult cancelAppointement(@RequestParam("id") Integer id) {
        return appointmentService.cancelAppointmentById(id);
    }

    @GetMapping("/accept")
    public JSONResult acceptAppointement(@RequestParam("id") Integer id) {
        return appointmentService.acceptAppointmentById(id);
    }
}
