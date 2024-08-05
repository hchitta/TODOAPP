import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel, Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


   private URL : string = 'https://freeapi.miniprojectideas.com/api/JWT/';
   private http = inject(HttpClient);

  constructor() { }

  getTodoItemList() {
    return [
      {taskId: 1,taskTitle :'Learn Angular 18 completely.',isComplte:false,taskType:'Skill Upgrade'},
      {taskId: 2,taskTitle :'Eat Healthy Food on time.',isComplte:false,taskType:'Weight Loss'},
      {taskId: 3,taskTitle :'Apply Jobs Daily.',isComplte:false,taskType:'Earn Money'}
    ];
  }

  getAllTodoList() : Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(`${this.URL}GetAllTaskList`);
  }

  addNewTodo(obj: Todo): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(this.URL + 'CreateNewTask',obj);
  }

  updateTodo(obj: Todo): Observable<APIResponseModel>{
    return this.http.put<APIResponseModel>(this.URL + 'UpdateTask',obj);
  }

  deleteTodo(id: number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(this.URL + 'DeleteTask?itemId='+id);
  }


}
