package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.UserLoginLog;
import com.horus.mapper.UserLoginLogMapper;
import com.horus.service.UserLoginLogService;
import org.springframework.stereotype.Service;

@Service
public class UserLoginLogServiceImpl extends ServiceImpl<UserLoginLogMapper, UserLoginLog> implements UserLoginLogService {

}
