package com.horus.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.SysPrivilege;

import java.util.List;

public interface SysPrivilegeService extends IService<SysPrivilege> {

    /**
     * 获取菜单下的所有权限数据
     *
     * @param menuId 菜单id
     * @param roleId 角色id
     **/
    List<SysPrivilege> getAllSysPrivilegesByRoleId(Long menuId, long roleId);
}
