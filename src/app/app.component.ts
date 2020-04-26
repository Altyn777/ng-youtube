import { Component } from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({ // декоратор
  selector: 'app-root', // поле selector
  templateUrl: './app.component.html', // в данном файле хранится шаблон этого компонента
  styleUrls: ['./app.component.scss'] // стили
})

export class AppComponent {
  appTitle = 'Angular todo application' // поле передается в шаблон html
  // title = 'ng-youtube';
  public todos: Todo[] = [
    {id: 1, title: 'ts', completed: true, date: new Date()},
    {id: 2, title: 'angular', completed: false, date: new Date()},
    {id: 3, title: 'nx', completed: false, date: new Date()},
  ]

  onToggle(id: number) {
    console.log(id)
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
}
