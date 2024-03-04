import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
  username = 'vytzab'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router : Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }
   
  ngOnInit() {
  }

  handleLogin() {
  // console.log(this.username);
    // if(this.username === 'vytzab' && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
   }
}