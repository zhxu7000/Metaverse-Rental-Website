package com.example.server.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import org.springframework.stereotype.Repository;

@Data
@Repository
@TableName("elec5620db.t_house")
public class House {
    private int id;
    private String name;
    private String type;
    private String description;
    private String image;
    private String url;
    private String country;
    private String address;
    private int bedrooms;
    private int bathrooms;
    private int state;
    private String price;
    private int landlordId;
}
