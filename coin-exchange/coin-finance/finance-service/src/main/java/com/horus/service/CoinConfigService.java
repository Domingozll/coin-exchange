package com.horus.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.CoinConfig;

public interface CoinConfigService extends IService<CoinConfig> {


    /*
     *  通过币种的id 查询币种的配置信息
     * */
    CoinConfig findByCoinId(Long coinId);

    /*
     *  新增或修改币种配置
     * */
    boolean updateOrSave(CoinConfig coinConfig);
}
