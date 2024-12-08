package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.ForexAccount;
import com.horus.mapper.ForexAccountMapper;
import com.horus.service.ForexAccountService;
import org.springframework.stereotype.Service;
@Service
public class ForexAccountServiceImpl extends ServiceImpl<ForexAccountMapper, ForexAccount> implements ForexAccountService{

}
