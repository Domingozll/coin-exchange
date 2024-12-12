package com.horus.event;

import com.horus.dto.CreateKLineDto;
import com.horus.dto.MarketDto;
import com.horus.feign.MarketServiceFeign;
import com.horus.rocket.Source;
import com.horus.service.TradeKlineService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.math.BigDecimal;
import java.util.List;

//import com.bjsxt.service.TradeKlineService;

/**
 * 行情数据的K线
 */
@Component
@Slf4j
public class TradeKLineEvent implements Event {

    @Autowired
    private Source source;

    @Autowired
    private MarketServiceFeign marketServiceFeign;


    @Override
    public void handle() {
        // 查询行情数据
        List<MarketDto> marketDtos = marketServiceFeign.tradeMarkets();
        if (CollectionUtils.isEmpty(marketDtos)) {
            return;
        }
        for (MarketDto marketDto : marketDtos) {
            // 将查询到的每一个行情数据生成K线数据
            CreateKLineDto createKLineDto = new CreateKLineDto();
            createKLineDto.setVolume(BigDecimal.ZERO);
            createKLineDto.setPrice(marketDto.getOpenPrice());
            createKLineDto.setSymbol(marketDto.getSymbol().toLowerCase());
            TradeKlineService.queue.offer(createKLineDto);
        }
    }
}