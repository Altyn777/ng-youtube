import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../app.component";

@Component({
  selector: 'app-todos', // позволяет использовать app-todos в html
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit { // OnInit - interface for lifecycle hooks

  @Input() todos: Todo[] = [] // принимаем массив с помощью декоратора Input

  constructor() { }

  ngOnInit(): void {
  }

}
