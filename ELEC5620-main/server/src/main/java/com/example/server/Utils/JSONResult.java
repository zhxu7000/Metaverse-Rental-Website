package com.example.server.Utils;

import com.alibaba.fastjson.JSONObject;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JSONResult {
    private long code;
    private String message;
    private Object data;

    public static JSONResult success() {
        return new JSONResult(JSONResultEnum.SUCCESS.getCode(), JSONResultEnum.SUCCESS.getMessage(), null);
    }

    public static JSONResult success(Object data) {
        return new JSONResult(JSONResultEnum.SUCCESS.getCode(), JSONResultEnum.SUCCESS.getMessage(), data);
    }

    public static JSONResult error() {
        return new JSONResult(JSONResultEnum.ERROR.getCode(), JSONResultEnum.ERROR.getMessage(), null);
    }

    public static JSONResult error(Object data) {
        return new JSONResult(JSONResultEnum.ERROR.getCode(), JSONResultEnum.ERROR.getMessage(), data);
    }

    public static JSONResult error(JSONResultEnum jsonResultEnum) {
        return new JSONResult(jsonResultEnum.getCode(), jsonResultEnum.getMessage(), null);
    }

}