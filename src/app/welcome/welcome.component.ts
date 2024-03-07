import { ActivatedRoute, RouterLink } from '@angular/router'; // Added RouterLink
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'; // Added
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { response } from 'express';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true, // Generated - Change
  imports: [RouterLink, NgIf] // Added
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  welcomeMessageFromService = ''  
  name = ''

  constructor(
    private route:ActivatedRoute,
    private service : WelcomeDataService) { }
   
  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe({
      next: (response) => {
        this.handleSuccessfulResponse(response)
      },
      error: (error) => {
        this.handleErrorResponse(error)
      }
    });
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message
    // console.log(response.message);
  }

  handleErrorResponse(error: HttpErrorResponse) {
    this.welcomeMessageFromService = error.error.message
    // console.log(error.message);
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe({
      next: (response) => {
        this.handleSuccessfulResponse(response)
      },
      error: (error) => {
        this.handleErrorResponse(error)
      }
    });
  }
}