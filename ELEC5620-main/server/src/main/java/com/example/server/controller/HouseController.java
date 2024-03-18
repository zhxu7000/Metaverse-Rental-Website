package com.example.server.controller;

import com.example.server.Utils.JSONResult;
import com.example.server.entity.House;
import com.example.server.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/house")
public class HouseController {
    @Autowired
    HouseService houseService;

    @GetMapping("/")
    public JSONResult getHouseinfoById(@RequestParam("id") Integer id){
        return JSONResult.success(houseService.getById(id));
    }

    @GetMapping("/all")
    public JSONResult getAllHouse(){
        return houseService.queryAllHouse();
    }

    @GetMapping("/landlord")
    public JSONResult getLandlordHouse(@RequestParam("id") Integer id){
        return houseService.querylandlordHouse(id);
    }

    @PostMapping("/add")
    public JSONResult addHouse(@RequestParam("name") String name, @RequestParam("type") String type,
                               @RequestParam("description") String description,@RequestParam("Image") String image,@RequestParam("url") String url,
                               @RequestParam("country") String country,@RequestParam("address") String address,@RequestParam("bedrooms") Integer bedrooms,
                               @RequestParam("bathrooms") Integer bathrooms,@RequestParam("surface") String surface, @RequestParam("year") Integer year,
                               @RequestParam("price") String price,@RequestParam("landlordid") int landlordid){
       House house = new House();
       house.setName(name);
       house.setType(type);
       house.setDescription(description);
       house.setImage(image);
       house.setCountry(country);
       house.setAddress(address);
       house.setBedrooms(bedrooms);
       house.setBathrooms(bathrooms);
       house.setPrice(price);
       house.setLandlordId(landlordid);
       if(houseService.save(house)){
           return JSONResult.success();
       }else{
           return JSONResult.error();
       }
    }
}
