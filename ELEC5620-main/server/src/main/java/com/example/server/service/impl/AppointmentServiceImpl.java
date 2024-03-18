package com.example.server.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.server.Utils.JSONResult;
import com.example.server.entity.House;
import com.example.server.mapper.AppointmentMapper;
import com.example.server.entity.Appointment;
import com.example.server.mapper.HouseMapper;
import com.example.server.mapper.LandlordMapper;
import com.example.server.mapper.UserMapper;
import com.example.server.service.AppointmentService;
import com.example.server.vo.AppointmentVo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;

@Service
public class AppointmentServiceImpl extends ServiceImpl<AppointmentMapper, Appointment>  implements AppointmentService {
    @Autowired
    AppointmentMapper appointmentMapper;

    @Autowired
    MailService mailService;

    @Autowired
    UserMapper userMapper;

    @Autowired
    LandlordMapper landlordMapper;
    @Autowired
    HouseMapper houseMapper;

    @Override
    public JSONResult queryAppointmentById(int id) {
        Appointment appointment  = appointmentMapper.selectAppointmentById(id);
        if(appointment != null){
            AppointmentVo appointmentVo = new AppointmentVo();
            BeanUtils.copyProperties(appointment,appointmentVo);
            return JSONResult.success(appointmentVo);
        }else{
            return JSONResult.error();
        }
    }

    @Override
        public JSONResult findAllAppointment(){
        ArrayList<Appointment> appointments = appointmentMapper.findAllAppointment();
        return JSONResult.success(appointments);
    }

    @Override
    public JSONResult findAvailableAppointment(){
        ArrayList<Appointment> appointments = appointmentMapper.findAvailableAppointment();
        return ListToVoList(appointments);
    }

    @Override
    public JSONResult findUserAppointment(int userId){
        ArrayList<Appointment> appointments = appointmentMapper.findAppointmentByUserId(userId);;
        return ListToVoList(appointments);
    }

    @Override
    public JSONResult findLandlordAppointment(int landlordId) {
        ArrayList<Appointment> appointments = appointmentMapper.findAppointmentByLandLordId(landlordId);
        return ListToVoList(appointments);
    }

    @Override
    public JSONResult findWaitLandlordAppointment(int landlordId) {
        ArrayList<Appointment> appointments = appointmentMapper.findWaitingAppointmentByLandLordId(landlordId);
        return ListToVoList(appointments);
    }


    @Override
    public JSONResult MakeAppointment(int id, int houseId){
        House house = houseMapper.queryHouseById(houseId);
        int landlordId = house.getLandlordId();
        if(appointmentMapper.createNewAppointment(id,landlordId,houseId) == 1){
            return JSONResult.success();
        }else{
            return JSONResult.error();
        }
    }

    public JSONResult ListToVoList(ArrayList<Appointment> appointments) {
        if(appointments != null){
            ArrayList<AppointmentVo> appointmentVos = new ArrayList<AppointmentVo>();
            for(Appointment appointment: appointments){
                AppointmentVo appointmentVo = new AppointmentVo();
                BeanUtils.copyProperties(appointment,appointmentVo);
                String userName = userMapper.getUserNameById(appointment.getUId());
                House house = houseMapper.queryHouseById(appointment.getHId());
                String landlordName = landlordMapper.getUserNameById(appointment.getLId());
                appointmentVo.setUserName(userName);
                appointmentVo.setLandlordName(landlordName);
                appointmentVo.setHouseName(house.getName());
                appointmentVos.add(appointmentVo);
            }
            return JSONResult.success(appointmentVos);
        }else{
            return JSONResult.error();
        }
    }

    @Override
    public JSONResult cancelAppointmentById(int id){
        if(appointmentMapper.updateAppointmentById(id) == 1)
            return  JSONResult.success( appointmentMapper.cancelAppointmentById(id));
        else{
            return JSONResult.error();
        }
    }

    public JSONResult acceptAppointmentById(int id){
        if(appointmentMapper.updateAppointmentById(id) == 1)
            return  JSONResult.success( appointmentMapper.updateAppointmentById(id));
        else{
            return JSONResult.error();
        }
    }

    @Override
    public JSONResult updateAppointmentById(int id){
        return JSONResult.success();
    }
}
