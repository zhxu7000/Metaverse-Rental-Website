package com.example.server.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.server.entity.Landlord;
import com.example.server.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.ArrayList;

@Mapper
public interface LandlordMapper extends BaseMapper<Landlord> {
    @Select("select * from elec5620db.t_landlord where id = #{id}")
    Landlord selectUserById(@Param("id") Integer id);

    @Select("select * from elec5620db.t_landlord where username = #{username}")
    User queryUserByUserName(@Param("username") String username);

    @Select("select * from elec5620db.t_landlord where username = #{username} and password = #{password}")
    Landlord FindUserByNameAndPwd(@Param("username") String username, @Param("password") String password);

    @Insert("insert into elec5620db.t_landlord(username, password, email, phone) values(#{username},#{password},#{email},#{phone})")
    int CreateNewUser(@Param("username") String username, @Param("password") String password, @Param("email") String email, @Param("phone") String phone);

    @Select("select * from elec5620db.t_landlord")
    ArrayList<Landlord> findAllLandlord();

    @Select("select username from elec5620db.t_landlord where id = #{userId}")
    String getUserNameById(@Param("userId") Integer userId);
}
