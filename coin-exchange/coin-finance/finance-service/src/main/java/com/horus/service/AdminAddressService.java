package com.horus.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.AdminAddress;
public interface AdminAddressService extends IService<AdminAddress>{


    /*
    *  条件分页查询归集地址
    * */
    Page<AdminAddress> findByPage(Page<AdminAddress> page, Long coinId);
}
