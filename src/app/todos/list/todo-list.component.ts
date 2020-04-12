import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {   
    private todos: any;

    constructor(private todoService: TodoService) {

    }
    ngOnInit(){
        this.todoService.getTodoItems().subscribe((result)=>{
          this.todos = result
        });
    }
}