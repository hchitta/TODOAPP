export interface ITodo {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn: Date;
}


export class Todo {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn: Date;

    constructor() {
        this.itemId = 0;
        this.taskName = '';
        this.completedOn = new Date();
        this.createdOn = new Date();
        this.isCompleted = false;
        this.tags = '';
        this.dueDate = new Date();
        this.taskDescription = '';
    }
}

export interface APIResponseModel {
    message: string;
    result: string;
    data: any;
}