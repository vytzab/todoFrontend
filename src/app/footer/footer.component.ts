import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
  }
 
}