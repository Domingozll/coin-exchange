package com.horus.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.UserFavoriteMarket;
import com.horus.mapper.UserFavoriteMarketMapper;
import com.horus.service.UserFavoriteMarketService;
import org.springframework.stereotype.Service;
@Service
public class UserFavoriteMarketServiceImpl extends ServiceImpl<UserFavoriteMarketMapper, UserFavoriteMarket> implements UserFavoriteMarketService{

    /*
     *  用户取消收藏
     * */
    @Override
    public boolean deleteUserFavoriteMarket(Long marketId, Long userId) {
        return remove(new LambdaQueryWrapper<UserFavoriteMarket>()
                .eq(UserFavoriteMarket::getMarketId,marketId)
                .eq(UserFavoriteMarket::getUserId,userId));
    }
}
