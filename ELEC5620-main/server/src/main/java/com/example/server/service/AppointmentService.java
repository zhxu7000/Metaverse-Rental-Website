package com.example.server.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.server.Utils.JSONResult;
import com.example.server.entity.Appointment;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
@Service
public interface AppointmentService extends IService<Appointment> {
    JSONResult queryAppointmentById(int id);
   // JSONResult MakeAppointmentById(int id, int userId) throws IOException;
    JSONResult MakeAppointment(int id,int houseId);
    JSONResult findAllAppointment();
    JSONResult findAvailableAppointment();
    JSONResult findUserAppointment(int userId);
    JSONResult findLandlordAppointment(int userId);
    JSONResult findWaitLandlordAppointment(int userId);

    JSONResult updateAppointmentById(int id);
    JSONResult cancelAppointmentById(int id);

    JSONResult acceptAppointmentById(int id);

}
