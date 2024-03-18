package com.example.server.vo;

import lombok.Data;

@Data
public class HouseInfoVo {
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
    private int landlord_id;
    private String landlord_name;
    private String landlord_image;
}
