package org.secondservice;

import org.secondservice.config.SSLUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer; // Импорт для SpringBootServletInitializer
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class SecondServiceApplication extends SpringBootServletInitializer { // Наследуем от SpringBootServletInitializer

    public static void main(String[] args) {
        SSLUtil.disableSSLVerification();
        SpringApplication.run(SecondServiceApplication.class, args);
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
