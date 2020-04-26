import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";

@Component({
  selector: 'app-todos', // позволяет использовать app-todos в html
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit { // OnInit - interface for lifecycle hooks
  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }
}
