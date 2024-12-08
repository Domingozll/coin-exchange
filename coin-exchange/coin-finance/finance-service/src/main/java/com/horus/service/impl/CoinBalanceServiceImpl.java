package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.CoinBalance;
import com.horus.mapper.CoinBalanceMapper;
import com.horus.service.CoinBalanceService;
import org.springframework.stereotype.Service;
@Service
public class CoinBalanceServiceImpl extends ServiceImpl<CoinBalanceMapper, CoinBalance> implements CoinBalanceService{

}
