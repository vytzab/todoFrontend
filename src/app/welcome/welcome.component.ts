import { ActivatedRoute, RouterLink } from '@angular/router'; // Added RouterLink
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'; // Added

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true, // Generated - Change
  imports: [RouterLink, NgIf] // Added
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  name = ''

  constructor(private route:ActivatedRoute) { }
   
  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }
}