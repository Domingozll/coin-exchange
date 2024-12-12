package com.horus;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.tio.websocket.starter.EnableTioWebSocketServer;

@SpringBootApplication
// 开启tio的websocket
@EnableTioWebSocketServer
public class ChanServiceApplication {

    public static void main(String[] args) {

        SpringApplication.run(ChanServiceApplication.class, args);
    }

}
