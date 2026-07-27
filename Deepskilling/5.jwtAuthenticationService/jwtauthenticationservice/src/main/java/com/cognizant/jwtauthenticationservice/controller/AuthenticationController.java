package com.cognizant.jwtauthenticationservice.controller;

import com.cognizant.jwtauthenticationservice.model.AuthenticationResponse;
import com.cognizant.jwtauthenticationservice.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(Principal principal) {

        String token = JwtUtil.generateToken(principal.getName());

        return new AuthenticationResponse(token);
    }
}
