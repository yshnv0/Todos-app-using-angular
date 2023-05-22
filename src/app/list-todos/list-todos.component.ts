import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos = [
    new Todo(1,'Learn Angular',false,new Date("2023-07-23")),
    new Todo(2,'Learn Spring',false,new Date("2023-09-23")),
    new Todo(3,'Learn DSA',false,new Date("2023-06-15")),
    // { id: 1, description: 'Learn Angular' },
    // { id: 2, description: 'Learn Spring' },
    // { id: 3, description: 'Learn DSA' }
  ]
  // todo={
  //   id:1,
  //   description:'Learn Angular'
  // }
}
