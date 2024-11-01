package org.firstservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
//                .requiresChannel(channel -> channel
//                        .anyRequest().requiresSecure() // Все запросы должны быть через HTTPS
//                )
                .csrf().disable()
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/", "/index.html", "/static/**", "/css/**", "/js/**", "/img/**").permitAll()
                        .requestMatchers("/api/v1/flats", "/api/v1/flats/*").permitAll()
                        .anyRequest().authenticated()
                )
                .exceptionHandling()
                .accessDeniedPage("/403");

        return http.build();
    }
}
