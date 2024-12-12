package com.horus.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.UserAuthAuditRecord;

import java.util.List;

public interface UserAuthAuditRecordService extends IService<UserAuthAuditRecord> {


    /*
     *  获取一个用户的审核记录
     * */
    List<UserAuthAuditRecord> getUserAuthAuditRecordList(Long id);
}
