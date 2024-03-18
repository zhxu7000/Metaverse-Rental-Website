package com.example.server.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Data
@Repository
@TableName("elec5620db.t_appointment")
public class Appointment {
    private int id;
    private int uId;
    private int lId;
    private int hId;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date time;
    private int aState;
}
