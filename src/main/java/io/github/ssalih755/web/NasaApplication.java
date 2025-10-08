package io.github.ssalih755.web;

import io.github.ssalih755.service.NEOService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "io.github.ssalih755")
public class NasaApplication {
    public static void main(String[] args) {
        SpringApplication.run(NasaApplication.class, args);
    }
}
