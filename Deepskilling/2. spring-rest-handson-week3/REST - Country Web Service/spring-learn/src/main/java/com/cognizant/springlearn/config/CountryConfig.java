package com.cognizant.springlearn.config;

import com.cognizant.springlearn.model.Country;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CountryConfig {

    @Bean
    public Country india() {
        return new Country("IN", "India");
    }

}