import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor() { }
   
   ngOnInit() {
   }

   handleLogin() {
    // console.log(this.username);
    if(this.username === 'vytzab' && this.password === 'dummy') {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
   }
}