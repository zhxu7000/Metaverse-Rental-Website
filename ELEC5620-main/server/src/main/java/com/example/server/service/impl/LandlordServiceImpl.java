package com.example.server.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.server.Utils.JSONResult;
import com.example.server.mapper.LandlordMapper;
import com.example.server.entity.Landlord;
import com.example.server.entity.User;
import com.example.server.service.LandlordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LandlordServiceImpl extends ServiceImpl<LandlordMapper, Landlord> implements LandlordService {
    @Autowired
    LandlordMapper landlordMapper;
    @Override
    public JSONResult queryUserById(int id) {
       // User user =  landlordMapper.selectUserById(id);
        Landlord landlord =  landlordMapper.selectUserById(id);
        if(landlord != null)
            return JSONResult.success(landlord);
        else{
            return JSONResult.error();
        }
    }

    @Override
    public JSONResult findAllLandlord() {
        ArrayList<Landlord> result = landlordMapper.findAllLandlord();
        if(result != null){
            return JSONResult.success(result);
        }else{
            return JSONResult.error();
        }
    }
}
