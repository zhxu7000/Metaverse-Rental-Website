package com.example.server.service;

import com.example.server.Utils.JSONResult;
import com.example.server.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {
    JSONResult doLogin(int userType, String username, String password);
    JSONResult doRegister(int userType, String username, String password, String email, String phone);
    User getLoginUser(String username, String password);
}
