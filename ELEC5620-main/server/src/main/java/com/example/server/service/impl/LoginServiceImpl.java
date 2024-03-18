package com.example.server.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.server.Utils.JSONResult;
import com.example.server.Utils.JSONResultEnum;
import com.example.server.entity.Landlord;
import com.example.server.mapper.LandlordMapper;
import com.example.server.mapper.UserMapper;
import com.example.server.entity.User;
import com.example.server.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl  extends ServiceImpl<UserMapper, User> implements LoginService {
    @Autowired
    UserMapper userMapper;
    @Autowired
    LandlordMapper landlordMapper;
    @Override
    public JSONResult doLogin(int userType, String username, String password) {
        if(userType == 0){
            User user = userMapper.FindUserByNameAndPwd(username,password);
            if(user == null){
                return JSONResult.error(JSONResultEnum.LOGIN_ERROR);
            }else{
                return JSONResult.success(user);
            }
        }
       else{
            Landlord landlord = landlordMapper.FindUserByNameAndPwd(username,password);
            if(landlord == null){
                return JSONResult.error(JSONResultEnum.LOGIN_ERROR);
            }else{
                return JSONResult.success(landlord);
            }
        }
    }

    @Override
    public JSONResult doRegister(int userType, String username, String password, String email, String phone) {
        if (userType == 0) {
            if (userMapper.queryUserByUserName(username) != null) {
                return JSONResult.error(JSONResultEnum.REGISTER_ERROR);
            }
            if (userMapper.CreateNewUser(username, password, email, phone) == 1)
                return JSONResult.success();
            else {
                return JSONResult.error();
            }
        }else{
            if (landlordMapper.queryUserByUserName(username) != null) {
                return JSONResult.error(JSONResultEnum.REGISTER_ERROR);
            }
            if (landlordMapper.CreateNewUser(username, password, email, phone) == 1)
                return JSONResult.success();
            else {
                return JSONResult.error();
            }
        }
    }

    @Override
    public User getLoginUser(String username, String password){
        User result = userMapper.FindUserByNameAndPwd(username,password);
        return result;
    }
}
