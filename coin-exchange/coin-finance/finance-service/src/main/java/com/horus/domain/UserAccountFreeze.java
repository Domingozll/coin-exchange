package com.horus.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@ApiModel(value = "com-horus-domain-UserAccountFreeze")
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "user_account_freeze")
public class UserAccountFreeze {
    @TableId(value = "user_id", type = IdType.INPUT)
    @ApiModelProperty(value = "")
    private Long userId;

    @TableField(value = "freeze")
    @ApiModelProperty(value = "")
    private BigDecimal freeze;
}