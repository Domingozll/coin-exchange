package com.horus;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;


/*
 *  admin-service 启动类
 * */
@SpringBootApplication
@EnableFeignClients
@EnableDiscoveryClient
@MapperScan(value = "com.horus.mapper")
public class AdminServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(AdminServiceApplication.class, args);
    }

}
