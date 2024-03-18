package com.example.server.service.impl;

import com.example.server.Utils.JSONResult;
import com.example.server.mapper.UserMapper;
import com.example.server.entity.User;
import com.example.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public JSONResult queryUserById(int id) {
        User user =  userMapper.selectUserById(id);
        if(user != null)
            return JSONResult.success(user);
        else{
            return JSONResult.error();
        }
    }

    @Override
    public JSONResult findAllUser() {
        ArrayList<User> result = userMapper.findAllUser();
        if(result != null){
            return JSONResult.success(result);
        }else{
            return JSONResult.error();
        }
    }
}
