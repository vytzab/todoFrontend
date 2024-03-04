import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common'; // Added

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn Spring Boot', false, new Date()),
    new Todo(2, 'Become an expert at Angular', false, new Date()),
    new Todo(3, 'Become a software developer', false, new Date()),
  ]

  constructor() {}

  ngOnInit() {

  }

}
