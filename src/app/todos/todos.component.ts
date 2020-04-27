import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";
// import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos', // позволяет использовать app-todos в html
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit { // OnInit - interface for lifecycle hooks

  public loading: boolean = true

  constructor(public todosService: TodosService) { }

  ngOnInit(): void { // компонент стартует
    this.todosService.fetchTodos()
      // .pipe(delay(2000))
      .subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
}
