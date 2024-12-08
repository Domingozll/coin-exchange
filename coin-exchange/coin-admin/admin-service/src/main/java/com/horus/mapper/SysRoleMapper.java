package com.horus.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.horus.domain.SysRole;


public interface SysRoleMapper extends BaseMapper<SysRole> {

    /*
    *  获取用户角色Code的实现
    * */
    String getUserRoleCode(Long userId);
}