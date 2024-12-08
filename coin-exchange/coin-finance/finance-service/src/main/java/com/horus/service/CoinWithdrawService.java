package com.horus.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.CoinWithdraw;
public interface CoinWithdrawService extends IService<CoinWithdraw>{


    /*
    *  提币记录的分页查询
    * */
    Page<CoinWithdraw> findByPage(Page<CoinWithdraw> page, Long coinId, Long userId, String userName, String mobile, Byte status, String numMin, String numMax, String startTime, String endTime);

    /*
    * 查询用户某种币的提币记录
    * */
    Page<CoinWithdraw> findUserCoinRecharge(Page<CoinWithdraw> page, Long coinId, Long userId);
}
