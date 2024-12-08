package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.ForexCoin;
import com.horus.mapper.ForexCoinMapper;
import com.horus.service.ForexCoinService;
import org.springframework.stereotype.Service;
@Service
public class ForexCoinServiceImpl extends ServiceImpl<ForexCoinMapper, ForexCoin> implements ForexCoinService{

}
