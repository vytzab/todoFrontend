import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common'
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  todos: Todo[] = [];
  message: string = '';

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.todoService.retrieveAllTodos('vytzab').subscribe({
      next: (response) => {
        console.log(response);
        this.todos = response;
      },
    });
  }
  
  refreshTodos() {
    this.todoService.retrieveAllTodos('vytzab').subscribe({
      next: (response) => {
        console.log(response);
        this.todos = response;
      },
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('vytzab', id).subscribe({
      next: (response) => {
        console.log(response);
        this.message = `Delete of ${id} Todo was Successful!`
        this.refreshTodos();
      }
    });
  }

  updateTodo(id: number) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
