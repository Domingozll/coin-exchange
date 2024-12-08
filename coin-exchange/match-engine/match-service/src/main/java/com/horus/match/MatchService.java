package com.horus.match;


import com.horus.model.Order;
import com.horus.model.OrderBooks;

/**
 * 撮合/交易的接口定义
 */
public interface MatchService {

    /**
     * 进行订单的撮合交易
     * @param order
     */
    void match(OrderBooks orderBooks, Order order) ;
}
