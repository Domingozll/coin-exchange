package com.horus.service;

import com.horus.model.LoginResult;

/*
 *  登录的接口
 * */
public interface SysLoginService {
    LoginResult login(String username, String password);
}
