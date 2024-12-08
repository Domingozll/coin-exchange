package com.horus.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.CashWithdrawAuditRecord;
import com.horus.domain.CashWithdrawals;
import com.horus.model.CashSellParam;

public interface CashWithdrawalsService extends IService<CashWithdrawals>{


    /*
    *  提现记录的查询
    * */
    Page<CashWithdrawals> findByPage(Page<CashWithdrawals> page, Long userId, String userName, String mobile, Byte status, String numMin, String numMax, String startTime, String endTime);

    /*
    *  审核提现记录
    * */
    boolean updateWithdrawalsStatus(Long userId, CashWithdrawAuditRecord cashWithdrawAuditRecord);

    /*
    *  查询用户的提现记录
    * */
    Page<CashWithdrawals> findUserCashWithdrawals(Page<CashWithdrawals> page, Long userId, Byte status);

    /*
    *  GCN的卖出操作
    * */
    boolean sell(Long userId, CashSellParam cashSellParam);
}
