package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.CoinServer;
import com.horus.mapper.CoinServerMapper;
import com.horus.service.CoinServerService;
import org.springframework.stereotype.Service;
@Service
public class CoinServerServiceImpl extends ServiceImpl<CoinServerMapper, CoinServer> implements CoinServerService{

}
