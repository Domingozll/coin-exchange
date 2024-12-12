package com.horus.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.Coin;
import com.horus.domain.CoinConfig;
import com.horus.mapper.CoinConfigMapper;
import com.horus.service.CoinConfigService;
import com.horus.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoinConfigServiceImpl extends ServiceImpl<CoinConfigMapper, CoinConfig> implements CoinConfigService {

    @Autowired
    private CoinService coinService;

    /*
     *  通过币种的id 查询币种的配置信息
     * */
    @Override
    public CoinConfig findByCoinId(Long coinId) {
        // coinConfig的id和Coin的id 值是相同的
        return getOne(new LambdaQueryWrapper<CoinConfig>().eq(CoinConfig::getId, coinId));
    }

    /*
     *  新增或修改币种配置
     * */
    @Override
    public boolean updateOrSave(CoinConfig coinConfig) {
        // 查询出coinType
        Coin coin = coinService.getById(coinConfig.getId());
        if (coin == null) {
            throw new IllegalArgumentException("coin-Id不存在");
        }
        coinConfig.setCoinType(coin.getType());
        coinConfig.setName(coin.getName());

        // 是新增还是修改?
        CoinConfig config = getById(coinConfig.getId());
        if (config == null) {
            // 新增操作
            return save(coinConfig);
        } else {
            // 修改操作
            return updateById(coinConfig);
        }
    }
}
