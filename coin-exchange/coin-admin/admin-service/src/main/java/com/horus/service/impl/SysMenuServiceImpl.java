package com.horus.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.SysMenu;
import com.horus.mapper.SysMenuMapper;
import com.horus.service.SysMenuService;
import com.horus.service.SysRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {

    @Autowired
    private SysRoleService sysRoleService;

    @Autowired
    private SysMenuMapper sysMenuMapper;

    /*
     *  通过用户的id 查询用户的菜单数据
     * */
    @Override
    public List<SysMenu> getMenusByUserId(Long userId) {
        //1 如果该用户是超级管理员->拥有所有的菜单
        if (sysRoleService.isSuperAdmin(userId)) {
            return list(); //查询所有
        }

        //2 如果用户不是超级管理员 ->查询角色 ->查询菜单
        return sysMenuMapper.selectMenusByUserId(userId);
    }
}
