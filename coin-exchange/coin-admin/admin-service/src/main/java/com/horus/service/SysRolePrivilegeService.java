package com.horus.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.SysMenu;
import com.horus.domain.SysRolePrivilege;
import com.horus.model.RolePrivilegesParam;

import java.util.List;

public interface SysRolePrivilegeService extends IService<SysRolePrivilege> {

    /**
     * 查询角色的权限
     *
     * @param roleId
     **/
    List<SysMenu> findSysMenuAndPrivileges(long roleId);

    /**
     * 给角色授权
     *
     * @param rolePrivilegesParam
     **/
    boolean grantPrivileges(RolePrivilegesParam rolePrivilegesParam);
}
