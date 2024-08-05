import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoService } from './todo.service';
import { APIResponseModel, ITodo, Todo } from './model/todo';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, DatePipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  
  title = 'TodoApp';

  todoService = inject(TodoService);

  taskList : ITodo[] = [];

  taskObj = new Todo();

  @ViewChild('todoDueDate') dueDateValue!: ElementRef;
  
  
  ngOnInit(): void {
    this.loadAllTodos();
  }

  loadAllTodos() {
    return this.todoService.getAllTodoList().subscribe((res:APIResponseModel) => {
      this.taskList = res.data;
      console.log(this.taskList);
    });
  }

  addNewTodo() {
    this.todoService.addNewTodo(this.taskObj).subscribe((res:APIResponseModel) => {
      if(res.result) {
        alert('Task created successfully');
        this.loadAllTodos();
        this.taskObj = new Todo();
      }
    },error => {
      alert('API Error');
    });
  }

  updateTodo() {
    this.todoService.updateTodo(this.taskObj).subscribe((res:APIResponseModel) => {
      if(res.result) {
        alert('Task updated successfully');
        this.loadAllTodos();
        this.taskObj = new Todo();
      }
    },error => {
      alert('API Error');
    });
  }

  onDelete(id: number) {
    const isConfirm = confirm('Are you sure you want to delete?');
    if(isConfirm) {
    this.todoService.deleteTodo(id).subscribe((res:APIResponseModel) => {
      if(res.result) {
        alert('Task deleted successfully');
        this.loadAllTodos();
        this.taskObj = new Todo();
      }
    },error => {
      alert('API Error');
    });
  }
  }
  
    onEdit(item: Todo){
    this.taskObj = item;
    setTimeout(() => {
      const dat = new Date(this.taskObj.dueDate);
      const day = ('0'+ dat.getDate()).slice(-2);
      const month = ('0'+ (dat.getMonth()+1)).slice(-2);
      const today = dat.getFullYear() + '-' + (month) + '-' + (day);
      this.dueDateValue.nativeElement.value = today;
    },1000);
    }

}
