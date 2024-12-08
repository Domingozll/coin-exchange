package com.horus.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.CoinType;
import com.horus.mapper.CoinTypeMapper;
import com.horus.service.CoinTypeService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class CoinTypeServiceImpl extends ServiceImpl<CoinTypeMapper, CoinType> implements CoinTypeService{

    /*
     *  条件分页查询货币类型
     * */
    @Override
    public Page<CoinType> findByPage(Page<CoinType> page, String code) {
        return page(page,new LambdaQueryWrapper<CoinType>()
                .like(!StringUtils.isEmpty(code), CoinType::getCode,code));
    }

    /*
     *  使用币种的状态查询所有的币种类型值
     * */
    @Override
    public List<CoinType> listByStatus(Byte status) {
        return list(new LambdaQueryWrapper<CoinType>().eq(status!=null,CoinType::getStatus,status));
    }
}
