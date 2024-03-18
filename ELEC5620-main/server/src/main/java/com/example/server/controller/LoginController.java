package com.example.server.controller;


import com.example.server.Utils.JSONResult;
import com.example.server.Utils.JSONResultEnum;
import com.example.server.entity.User;
import com.example.server.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Objects;

@RestController
@RequestMapping("/Login")
public class LoginController{
    @Autowired
    LoginService loginService;

    @GetMapping("/doLogin")
    public JSONResult doLogin(@RequestParam("usertype") int userType, @RequestParam("username") String username, @RequestParam("password") String password, HttpSession session, HttpServletRequest request, HttpServletResponse response){
        if(Objects.equals(username, "") || Objects.equals(password, "")){
            return JSONResult.error(JSONResultEnum.LOGIN_ERROR);
        }else{
            JSONResult data = loginService.doLogin(userType,username,password);
            //if (data.getData() != null){
            //    User userdata = loginService.getLoginUser(username, password);
            //    session.setAttribute("id", userdata.getId());
            //    session.setAttribute("username", userdata.getUsername());
            //}
            Cookie cookie = new Cookie("JSESSIONID",session.getId());
            cookie.setPath("/");
            cookie.setMaxAge(24*60*60);
            response.setHeader("Access-Control-Allow-Credentials","true");
            response.addCookie(cookie);
            return data;
        }
    }

    @GetMapping("/doRegister")
    public JSONResult doRegister(@RequestParam("usertype") int userType, @RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("email") String email, @RequestParam("phone") String phone){
        if(Objects.equals(username, "") || Objects.equals(password, "")||Objects.equals(email,"")||Objects.equals(phone,"")){
            return JSONResult.error(JSONResultEnum.EMPTY_ERROR);
        }else{
            return loginService.doRegister(userType, username, password, email,phone);
        }
    }
}
