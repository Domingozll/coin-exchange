package com.horus.task;


import com.horus.event.DepthEvent;
import com.horus.event.MarketEvent;
import com.horus.event.TradeEvent;
import com.horus.feign.MarketServiceFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

/*
 *  事件触发器,用于触发自己定义的事件
 * */
//@Component
public class MarketTickerTask {

    @Autowired
    private MarketServiceFeign marketServiceFeign;

    /**
     * 市场的事件
     */
    @Autowired
    private MarketEvent marketEvent;

    /**
     * 成交记录的事件
     */
    @Autowired
    private TradeEvent tradeEvent;

    /**
     * 盘口数据变化的事件
     */
    @Autowired
    private DepthEvent depthEvent;

    /**
     * 推送市场的行情变化
     * 1s 触发一次
     */
    //@Scheduled(fixedRate = 1000)
    public void pushMarkets() {
        marketEvent.handle();
    }

    /**
     * 推送市场盘口数据(深度数据)
     * 0.5s 触发一次
     */
    @Scheduled(fixedRate = 500)
    public void pushDepths() {
        depthEvent.handle();
    }

    /**
     * 推送实时成交订单数据
     * 0.5s 触发一次
     */
    //@Scheduled(fixedRate = 500)
    public void pushTrades() {
        tradeEvent.handle();
    }


    /**
     * 刷新24小时成交数据
     */
    //@Scheduled(fixedRate = 1000)
    public void refresh24HDeal() {
        marketServiceFeign.tradeMarkets().forEach(market -> {
            if (market.getStatus() == 1) {
                marketServiceFeign.refresh24hour(market.getSymbol());
            }
        });
    }
}
