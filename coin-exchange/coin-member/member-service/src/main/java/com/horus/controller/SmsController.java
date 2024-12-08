package com.horus.controller;

import com.horus.domain.Sms;
import com.horus.model.R;
import com.horus.service.SmsService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sms")
public class SmsController {

    @Autowired
    private SmsService smsService;

    @PostMapping("/sendTo")
    @ApiOperation(value = "发送短信")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "sms",value = "smsjson数据")
    })
    public R sendSms(@RequestBody Sms sms){
        boolean isOk = smsService.sendSms(sms);
        if (isOk){
            return R.ok();
        }
        return R.fail("发送失败");
    }
}
