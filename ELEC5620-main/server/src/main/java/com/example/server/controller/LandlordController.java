package com.example.server.controller;

import com.example.server.Utils.JSONResult;
import com.example.server.service.LandlordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/landlord")
public class LandlordController{
    @Autowired
    LandlordService landlordService;

    @GetMapping("/")
    public JSONResult getUserInfo(@RequestParam("id") Integer id){
        return landlordService.queryUserById(id);
    }

    @GetMapping("/loadCookie")
    public JSONResult getUserByCookie(String userTicket,HttpServletRequest request, HttpServletResponse response){
        if(userTicket==null){
            return JSONResult.error();
        }else{
            HttpSession session = request.getSession();
            if(session.getAttribute("id") !=null) {
//                JSONResult result = JSONResult.success(userService.queryUserById((int) loginUserId));
//                result.setLoginUserId(loginUserId);
//                result.setLoginUsername(loginUsername);
                return JSONResult.success();
            }else{
                return JSONResult.error();
            }
        }
    }

    @GetMapping("/doLogout")
    public JSONResult doLogout(HttpSession session){
        if(session!=null) {
            session.invalidate();
            return JSONResult.success();
        }else{
            return JSONResult.error();
        }
    }

    @GetMapping("/all")
    public JSONResult getAllLandlord() {
        return landlordService.findAllLandlord();
    }
}
