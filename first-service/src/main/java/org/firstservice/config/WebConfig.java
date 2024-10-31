package org.firstservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html"); // Перенаправление на index.html
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Разрешаем доступ ко всем маршрутам
                .allowedOrigins("https://localhost:8081") // Укажите адрес вашего фронтенда
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Разрешенные методы
                .allowedHeaders("*"); // Разрешаем любые заголовки
    }
}
