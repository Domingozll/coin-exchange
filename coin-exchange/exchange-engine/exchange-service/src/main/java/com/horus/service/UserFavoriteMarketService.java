package com.horus.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.horus.domain.UserFavoriteMarket;

public interface UserFavoriteMarketService extends IService<UserFavoriteMarket> {


    /*
     *  用户取消收藏
     * */
    boolean deleteUserFavoriteMarket(Long marketId, Long userId);
}
