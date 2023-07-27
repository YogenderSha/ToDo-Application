import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    todos: Todo[];

    constructor(){
      this.todos=[
        {
          sno : 1 ,
          title : "This is Title1" ,
          desc: "Decription" ,
          active: true
        },
        {
          sno : 2,
          title :"This is Title2",
          desc: "Decription" ,
          active: true
        },
        {
          sno : 3 ,
          title : "This is Title3" ,
          desc: "Decription" ,
          active: true
        }
      ]
}
}
