package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.TurnoverRecord;
import com.horus.mapper.TurnoverRecordMapper;
import com.horus.service.TurnoverRecordService;
import org.springframework.stereotype.Service;
@Service
public class TurnoverRecordServiceImpl extends ServiceImpl<TurnoverRecordMapper, TurnoverRecord> implements TurnoverRecordService{

}
