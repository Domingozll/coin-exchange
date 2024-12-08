package com.horus.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.Sms;
public interface SmsService extends IService<Sms>{


    /*
    *  发送一个短信
    * */
    boolean sendSms(Sms sms);
}
