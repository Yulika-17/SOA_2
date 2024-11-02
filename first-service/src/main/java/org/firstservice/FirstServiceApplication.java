package org.firstservice;

//import org.firstservice.config.SSLUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class FirstServiceApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
//        SSLUtil.disableSSLVerification();
        SpringApplication.run(FirstServiceApplication.class, args);

    }
}
