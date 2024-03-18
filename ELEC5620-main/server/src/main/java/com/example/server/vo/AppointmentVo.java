package com.example.server.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import java.util.Date;

@Data
public class AppointmentVo {
    private int id;
    private int uId;
    private int lId;
    private int hId;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date time;
    private int aState;
    private String userName;
    private String houseName;
    private String landlordName;
}