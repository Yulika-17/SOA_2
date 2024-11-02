//package org.firstservice.config;
//
//import org.apache.hc.client5.http.classic.HttpClient;
//import org.apache.http.impl.client.CloseableHttpClient;
//import org.apache.http.impl.client.HttpClients;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
//import org.springframework.web.client.RestTemplate;
//
//import javax.net.ssl.SSLContext;
//import java.security.NoSuchAlgorithmException;
//
//@Configuration
//public class RestTemplateConfig {
//
//    @Bean
//    public RestTemplate restTemplate() throws NoSuchAlgorithmException {
//        CloseableHttpClient httpClient = HttpClients.custom()
//                .setSSLContext(SSLContext.getDefault())
//                .build();
//
//        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory((HttpClient) httpClient);
//        return new RestTemplate(factory);
//    }
//}
