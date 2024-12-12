package com.horus.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.horus.constant.Constants;
import com.horus.domain.CashRecharge;
import com.horus.domain.CashRechargeAuditRecord;
import com.horus.model.CashParam;
import com.horus.model.R;
import com.horus.service.CashRechargeService;
import com.horus.util.ReportCsvUtils;
import com.horus.vo.CashTradeVo;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.CollectionUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.supercsv.cellprocessor.CellProcessorAdaptor;
import org.supercsv.cellprocessor.ift.CellProcessor;
import org.supercsv.util.CsvContext;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/cashRecharges")
@ApiOperation(value = "GCN控制器")
public class CashRechargeController {

    @Autowired
    private CashRechargeService cashRechargeService;

    @GetMapping("/records")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "current", value = "当前页"),
            @ApiImplicitParam(name = "size", value = "每页显示的条数"),
            @ApiImplicitParam(name = "coinId", value = "币种Id"),
            @ApiImplicitParam(name = "userId", value = "用户的ID"),
            @ApiImplicitParam(name = "userName", value = "用户的名称"),
            @ApiImplicitParam(name = "mobile", value = "用户的手机号"),
            @ApiImplicitParam(name = "status", value = "充值的状态"),
            @ApiImplicitParam(name = "numMin", value = "充值金额的最小值"),
            @ApiImplicitParam(name = "numMax", value = "充值金额的最大值"),
            @ApiImplicitParam(name = "startTime", value = "充值开始时间"),
            @ApiImplicitParam(name = "endTime", value = "充值结束时间")
    })
    public R<Page<CashRecharge>> findByPage(
            @ApiIgnore Page<CashRecharge> page, Long coinId,
            Long userId, String userName, String mobile,
            Byte status, String numMin, String numMax,
            String startTime, String endTime
    ) {
        Page<CashRecharge> pageData = cashRechargeService.findByPage(page, coinId, userId, userName
                , mobile, status, numMin, numMax, startTime, endTime);
        return R.ok(pageData);
    }

    @GetMapping("/exportCNYRecharge")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "coinId", value = "币种Id"),
            @ApiImplicitParam(name = "userId", value = "用户的ID"),
            @ApiImplicitParam(name = "userName", value = "用户的名称"),
            @ApiImplicitParam(name = "mobile", value = "用户的手机号"),
            @ApiImplicitParam(name = "status", value = "充值的状态"),
            @ApiImplicitParam(name = "numMin", value = "充值金额的最小值"),
            @ApiImplicitParam(name = "numMax", value = "充值金额的最大值"),
            @ApiImplicitParam(name = "startTime", value = "充值开始时间"),
            @ApiImplicitParam(name = "endTime", value = "充值结束时间")
    })
    public void recordsExport(
            Long coinId,
            Long userId, String userName, String mobile,
            Byte status, String numMin, String numMax,
            String startTime, String endTime
    ) {
        Page<CashRecharge> page = new Page<>(1, 10000);
        Page<CashRecharge> pageData = cashRechargeService.findByPage(page, coinId, userId, userName
                , mobile, status, numMin, numMax, startTime, endTime);
        List<CashRecharge> records = pageData.getRecords();
        if (!CollectionUtils.isEmpty(records)) {
            // 进行导出操作
            // 格式转换
            CellProcessorAdaptor longToStringAdapter = new CellProcessorAdaptor() {
                @Override
                public <T> T execute(Object o, CsvContext csvContext) {
                    // Object为需要转成的类型
                    return (T) String.valueOf(o);
                }
            };
            // 对于金额，需要保留8位有效数字
            DecimalFormat decimalFormat = new DecimalFormat("0.00000000");
            CellProcessorAdaptor moneyCellProcessorAdaptor = new CellProcessorAdaptor() {
                @Override
                public <T> T execute(Object o, CsvContext csvContext) {
                    BigDecimal num = (BigDecimal) o;
                    String numReal = decimalFormat.format(num);
                    return (T) numReal;
                }
            };
            // 对类型进行处理
            CellProcessorAdaptor typeCellProcessorAdaptor = new CellProcessorAdaptor() {
                @Override
                public <T> T execute(Object o, CsvContext csvContext) {
                    String type = String.valueOf(o);
                    String typeName = "";
                    switch (type) {
                        case "alipay":
                            typeName = "支付宝";
                            break;
                        case "cai1pay":
                            typeName = "财易付";
                            break;
                        case "bank":
                            typeName = "银联";
                            break;
                        case "linepay":
                            typeName = "在线支付";
                            break;
                        default:
                            typeName = "未知";
                            break;
                    }
                    return (T) typeName;
                }
            };

            // 对时间进行处理
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            CellProcessorAdaptor timeCellProcessorAdaptor = new CellProcessorAdaptor() {
                @Override
                public <T> T execute(Object o, CsvContext csvContext) {
                    Date date = (Date) o;
                    String dateStr = simpleDateFormat.format(date);
                    return (T) dateStr;
                }
            };

            // 单独对状态status做一个类型处理器 倒数第三个参数
            CellProcessorAdaptor statusCellProcessorAdaptor = new CellProcessorAdaptor() {
                @Override
                public <T> T execute(Object o, CsvContext csvContext) {
                    Byte status = (Byte) o;
                    String statusStr = "";
                    switch (status) {
                        case 0:
                            statusStr = "待审核";
                            break;
                        case 1:
                            statusStr = "审核通过";
                            break;
                        case 2:
                            statusStr = "拒绝";
                            break;
                        case 3:
                            statusStr = "充值成功";
                            break;
                        default:
                            statusStr = "未知";
                            break;
                    }
                    return (T) statusStr;
                }
            };


            // 对 headers和properties进行类型转化
            CellProcessor[] processors = new CellProcessor[]{
                    longToStringAdapter, longToStringAdapter, null, null, null,
                    moneyCellProcessorAdaptor, moneyCellProcessorAdaptor, moneyCellProcessorAdaptor,
                    typeCellProcessorAdaptor, null, null, timeCellProcessorAdaptor,
                    timeCellProcessorAdaptor, statusCellProcessorAdaptor, null, null
            };
            ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            try {
                // 导出csv文件
                ReportCsvUtils.reportList(requestAttributes.getResponse(), Constants.CASH_RECHARGE_HEADERS
                        , Constants.CASH_RECHARGE_PROPERTIES, "场外交易审核记录.csv", records, processors);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @PostMapping("/cashRechargeUpdateStatus")
    @ApiOperation(value = "现金的充值审核")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "cashRecharge", value = "cashRecharge json数据")
    })
    public R cashRechargeAudit(@RequestBody CashRechargeAuditRecord auditRecord) {
        String userId = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        boolean isOk = cashRechargeService.cashRechargeAudit(Long.valueOf(userId), auditRecord);
        return isOk ? R.ok() : R.fail("审核失败");
    }

    @GetMapping("/user/records")
    @ApiOperation(value = "查询当前用户充值记录")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "status", value = "充值的状态"),
            @ApiImplicitParam(name = "current", value = "当前页"),
            @ApiImplicitParam(name = "size", value = "每页条目"),
    })
    public R<Page<CashRecharge>> findUserCashRecharge(@ApiIgnore Page<CashRecharge> page, Byte status) {
        String userId = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        Page<CashRecharge> cashRechargePage = cashRechargeService.findUserCashRecharge(page, Long.valueOf(userId), status);
        return R.ok(cashRechargePage);
    }

    @PostMapping("/buy")
    @ApiOperation(value = "GCN买入")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "cashParam", value = "现金交易的参数"),
    })
    public R<CashTradeVo> buy(@RequestBody @Validated CashParam cashParam) {
        String userId = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        CashTradeVo cashTradeVo = cashRechargeService.buy(Long.valueOf(userId), cashParam);
        return R.ok(cashTradeVo);
    }


}
