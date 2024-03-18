package com.example.server.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.server.Utils.JSONResult;
import com.example.server.entity.House;
import org.springframework.stereotype.Service;

@Service
public interface HouseService extends IService<House> {
    JSONResult queryHouseById(int id);

    JSONResult queryAllHouse();

    JSONResult querylandlordHouse(int id);

    JSONResult addHouse();
}
