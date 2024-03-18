package com.example.server.service;

import com.example.server.entity.Landlord;
import org.springframework.stereotype.Service;
import com.baomidou.mybatisplus.extension.service.IService;
import com.example.server.Utils.JSONResult;

@Service
public interface LandlordService extends IService<Landlord> {
        JSONResult queryUserById(int id);
        JSONResult findAllLandlord();
}
