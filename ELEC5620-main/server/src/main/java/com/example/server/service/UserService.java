package com.example.server.service;

import com.example.server.Utils.JSONResult;
import com.example.server.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    JSONResult queryUserById(int id);
    JSONResult findAllUser();
}
