package com.horus.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.horus.domain.AccountDetail;
import com.horus.dto.UserDto;
import com.horus.feign.UserServiceFeign;
import com.horus.mapper.AccountDetailMapper;
import com.horus.service.AccountDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AccountDetailServiceImpl extends ServiceImpl<AccountDetailMapper, AccountDetail> implements AccountDetailService {

    @Autowired
    private UserServiceFeign userServiceFeign;

    /*
     *  资金流水的分页查询
     * */
    @Override
    public Page<AccountDetail> findByPage(Page<AccountDetail> page, Long coinId, Long accountId, Long userId, String userName, String mobile, String amountStart, String amountEnd, String startTime, String endTime) {
        LambdaQueryWrapper<AccountDetail> accountDetailLambdaQueryWrapper = new LambdaQueryWrapper<>();
        // 1.若用户本次的查询中,带了用户的信息userId,userName,mobile ---> 本质就是要把用户的id放在我们的查询条件里面
        Map<Long, UserDto> basicUsers = null;
        if (userId != null || !StringUtils.isEmpty(userName) || !StringUtils.isEmpty(mobile)) {
            // 使用用户的信息查询
            // 需要远程调用查询用户的信息
            // 这远程调用接口不仅仅通过ids进行批量查询，还通过userName和mobile进行查询UserDto的值
            basicUsers = userServiceFeign.getBasicUsers(userId == null ? null : Arrays.asList(userId), userName, mobile);
            if (CollectionUtils.isEmpty(basicUsers)) {
                // 找不到这样的用户
                return page;
            }
            Set<Long> userIds = basicUsers.keySet();
            accountDetailLambdaQueryWrapper.in(!CollectionUtils.isEmpty(userIds), AccountDetail::getUserId, userIds);
        }
        // 2.若用户本次的查询中，没有带用户的信息
        accountDetailLambdaQueryWrapper.eq(accountId != null, AccountDetail::getAccountId, accountId)
                .eq(coinId != null, AccountDetail::getCoinId, coinId)
                .between(
                        !(StringUtils.isEmpty(amountStart) || StringUtils.isEmpty(amountEnd)),
                        AccountDetail::getAmount,
                        new BigDecimal(StringUtils.isEmpty(amountStart) ? "0" : amountStart),
                        new BigDecimal(StringUtils.isEmpty(amountEnd) ? "0" : amountEnd)
                )
                .between(
                        !(StringUtils.isEmpty(startTime) || StringUtils.isEmpty(endTime)),
                        AccountDetail::getCreated,
                        startTime,
                        endTime + " 23:59:59"
                );
        Page<AccountDetail> accountDetailPage = page(page, accountDetailLambdaQueryWrapper);
        List<AccountDetail> records = accountDetailPage.getRecords();
        if (!CollectionUtils.isEmpty(records)) {
            List<Long> userIds = records.stream().map(AccountDetail::getUserId).collect(Collectors.toList());
            if (CollectionUtils.isEmpty(basicUsers)) {
                basicUsers = userServiceFeign.getBasicUsers(userIds, null, null);
            }
            Map<Long, UserDto> finalBasicUsers = basicUsers;
            records.forEach(accountDetail -> {
                // 需要远程调用查询用户的信息
                UserDto userDto = finalBasicUsers.get(accountDetail.getUserId());
                if (userDto != null) {
                    accountDetail.setUsername(userDto.getUsername());
                    accountDetail.setRealName(userDto.getRealName());
                }
            });
        }
        return accountDetailPage;
    }
}
