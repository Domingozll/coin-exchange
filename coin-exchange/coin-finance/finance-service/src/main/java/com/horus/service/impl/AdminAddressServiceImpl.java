package com.horus.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.AdminAddress;
import com.horus.domain.Coin;
import com.horus.mapper.AdminAddressMapper;
import com.horus.service.AdminAddressService;
import com.horus.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminAddressServiceImpl extends ServiceImpl<AdminAddressMapper, AdminAddress> implements AdminAddressService {

    @Autowired
    private CoinService coinService;

    /*
     *  条件分页查询归集地址
     * */
    @Override
    public Page<AdminAddress> findByPage(Page<AdminAddress> page, Long coinId) {
        return page(page, new LambdaQueryWrapper<AdminAddress>().eq(coinId != null, AdminAddress::getCoinId, coinId));
    }

    /*
     *  重写save方法，为了让我们的归集地址里面包含coinType
     * */
    @Override
    public boolean save(AdminAddress entity) {
        Long coinId = entity.getCoinId();
        Coin coin = coinService.getById(coinId);
        if (coin == null) {
            throw new IllegalArgumentException("输入的币种id错误");
        }
        String type = coin.getType();
        entity.setCoinType(type);
        return super.save(entity);
    }
}
