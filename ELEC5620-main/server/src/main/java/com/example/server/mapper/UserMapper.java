package com.example.server.mapper;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.server.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Mapper
//@TableName("elec5620db.user")
public interface UserMapper extends BaseMapper<User> {
    @Select("select * from elec5620db.t_user where id = #{id}")
    User selectUserById(@Param("id") Integer id);
    @Select("select * from elec5620db.t_user where username = #{username}")
    User queryUserByUserName(@Param("username") String username);

    @Select("select * from elec5620db.t_user where username = #{username} and password = #{password}")
    User FindUserByNameAndPwd(@Param("username") String username, @Param("password") String password);

    @Insert("insert into elec5620db.t_user(username, password, email, phone) values(#{username},#{password},#{email},#{phone})")
    int CreateNewUser(@Param("username") String username, @Param("password") String password,@Param("email") String email, @Param("phone") String phone);

    @Select("select * from elec5620db.t_user")
    ArrayList<User> findAllUser();

    @Select("select username from elec5620db.t_user where id = #{userId}")
    String getUserNameById(@Param("userId") Integer userId);
}
