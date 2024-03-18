package com.example.server.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.Getter;
import org.springframework.stereotype.Repository;

@Data
@Repository
@TableName("elec5620db.t_user")
public class User {
    private int id;
    private String username;
    private String password;
    private String image;
    private String email;
    private String phone;
}
