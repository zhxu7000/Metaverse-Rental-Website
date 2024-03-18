package com.example.server.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.server.entity.Appointment;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;


@Mapper
public interface AppointmentMapper extends BaseMapper<Appointment> {
    @Select("select * from elec5620db.t_appointment where id = #{id}")
    Appointment selectAppointmentById(@Param("id") Integer id);

    @Update({"update elec5620db.t_appointment set a_state = 1 where id = #{id}"})
    int updateAppointmentById(@Param("id") Integer id);

    @Update({"update elec5620db.t_appointment set a_state = 2 where id = #{id}"})
    int cancelAppointmentById(@Param("id") Integer id);

    @Select("select * from elec5620db.t_appointment")
    ArrayList<Appointment> findAllAppointment();

    @Select("select * from elec5620db.t_appointment where a_state = 0")
    ArrayList<Appointment> findAvailableAppointment();

    @Select("select * from elec5620db.t_appointment where u_id = #{uId} and a_state != 2")
    ArrayList<Appointment> findAppointmentByUserId(@Param("uId") Integer uId);

    @Select("select * from elec5620db.t_appointment where l_id = #{lId} and a_state = 1")
    ArrayList<Appointment> findAppointmentByLandLordId(@Param("lId") Integer landlordId);

    @Select("select * from elec5620db.t_appointment where l_id = #{lId} and a_state = 0")
    ArrayList<Appointment> findWaitingAppointmentByLandLordId(@Param("lId") Integer landlordId);

    @Insert("insert into elec5620db.t_appointment(u_id, l_id, h_id, time, a_state) values(#{uId},#{lId},#{hId},now(),0)")
    int createNewAppointment(@Param("uId") int uId, @Param("lId") int lId, @Param("hId")int hId);

    @Delete("delete from elec5620db.t_appointment where id = #{id}")
    int DeleteAppointmentById(Integer id);
}
