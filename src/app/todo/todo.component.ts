import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id!: number
  todo!: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('vytzab', this.id).subscribe({
        next: (data) => {
          this.todo = data;
        }
      })
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('vytzab', this.todo).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      });
    } else {
      this.todoService.updateTodo('vytzab', this.id, this.todo).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      });
    }
  }
}
