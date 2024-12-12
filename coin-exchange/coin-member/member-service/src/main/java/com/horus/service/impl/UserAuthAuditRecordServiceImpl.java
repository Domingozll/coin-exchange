package com.horus.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.UserAuthAuditRecord;
import com.horus.mapper.UserAuthAuditRecordMapper;
import com.horus.service.UserAuthAuditRecordService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAuthAuditRecordServiceImpl extends ServiceImpl<UserAuthAuditRecordMapper, UserAuthAuditRecord> implements UserAuthAuditRecordService {

    /*
     *  获取用户的一个审核记录
     * */
    @Override
    public List<UserAuthAuditRecord> getUserAuthAuditRecordList(Long id) {
        return list(new LambdaQueryWrapper<UserAuthAuditRecord>()
                .eq(UserAuthAuditRecord::getUserId, id)
                .orderByDesc(UserAuthAuditRecord::getCreated)
                .last("limit 3"));
    }
}
