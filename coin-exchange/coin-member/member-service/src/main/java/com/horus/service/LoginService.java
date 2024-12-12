package com.horus.service;

import com.horus.model.LoginForm;
import com.horus.model.LoginUser;

public interface LoginService {

    /*
     *  会员的登录
     * */
    LoginUser login(LoginForm loginForm);
}
