import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

    isFormValid = false;
    isAdmin = true;
    todoService = inject(TodoService);
    taskList : any = [];

    constructor() {
      this.taskList = this.todoService.getTodoItemList();
    }
  

  completeTask() {
    
  }

  updateNewTitle(newTitle : string){
    
  }

  showTaskType(e : any) {
    alert(e.target.dataset.tasktype);
  }

}
