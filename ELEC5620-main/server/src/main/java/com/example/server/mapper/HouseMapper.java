package com.example.server.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.server.entity.House;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;


@Mapper
public interface HouseMapper extends BaseMapper<House> {
    @Select("select * from elec5620db.t_house where id = #{id}")
    House queryHouseById(int id);

    @Select("select * from elec5620db.t_house where state = 0")
    ArrayList<House> queryAllHouse();

    @Select("select * from elec5620db.t_house where landlord_id =  #{landlord_id}")
    ArrayList<House> queryHouseByLandlordId(@Param("landlord_id") int landlordId);

    @Insert("insert into sys.house(publisher, topic, content, time) values(#{userId},#{topic},#{content},now())")
    int createNewHouse(@Param("userId") int userId, @Param("topic") String topic, @Param("content") String content);
}
