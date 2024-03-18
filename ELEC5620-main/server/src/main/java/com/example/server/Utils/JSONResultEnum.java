package com.example.server.Utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public enum JSONResultEnum {
        //PUBLIC
        SUCCESS(200,"SUCCESS"),
        ERROR(500,"Server wrong"),
        //Register
        REGISTER_ERROR(500110,"username has been used, please change another"),
        //LOGIN
        LOGIN_ERROR(500210,"username or password is wrong"),
        EMPTY_ERROR(500300,"Content can not be empty"),
        ;

        private final Integer code;
        private final String message;
}
