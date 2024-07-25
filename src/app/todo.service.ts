import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor() { }

  getTodoItemList() {
    return [
      {taskId: 1,taskTitle :'Learn Angular 18 completely.',isComplte:false,taskType:'Skill Upgrade'},
      {taskId: 2,taskTitle :'Eat Healthy Food on time.',isComplte:false,taskType:'Weight Loss'},
      {taskId: 3,taskTitle :'Apply Jobs Daily.',isComplte:false,taskType:'Earn Money'}
    ];

  }
}
