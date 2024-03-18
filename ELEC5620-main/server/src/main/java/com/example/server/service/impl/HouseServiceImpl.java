package com.example.server.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.server.Utils.JSONResult;
import com.example.server.Utils.JSONResultEnum;
import com.example.server.mapper.HouseMapper;
import com.example.server.entity.House;
import com.example.server.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class HouseServiceImpl extends ServiceImpl<HouseMapper, House> implements HouseService {
    @Autowired
    HouseMapper houseMapper;
    @Override
    public JSONResult queryHouseById(int id) {
        House house = houseMapper.queryHouseById(id);
        if (house == null){
            return JSONResult.error(JSONResultEnum.LOGIN_ERROR);
        }
        else{
            return JSONResult.success(house);
        }
    }

    @Override
    public JSONResult queryAllHouse(){
        ArrayList<House> houseList = houseMapper.queryAllHouse();
        if (houseList == null){
            return JSONResult.error(JSONResultEnum.LOGIN_ERROR);
        }
        else{
            return JSONResult.success(houseList);
        }
    }

    @Override
    public JSONResult querylandlordHouse(int id) {
        ArrayList<House> houseList = houseMapper.queryHouseByLandlordId(id);
        System.out.println(id);
        System.out.println(houseList);
        if (houseList == null){
            return JSONResult.error();
        }
        else{
            return JSONResult.success(houseList);
        }
    }

    @Override
    public JSONResult addHouse(){
        return JSONResult.success();
       // House newhouse = new House("",,);
       // houseMapper.insert();
    }
//        if(houseMapper.createNewHouse() == 1)
//            return JSONResult.success();
//        else{
//            return JSONResult.error();
//        }
//    }
}
