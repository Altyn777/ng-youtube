import {Injectable} from "@angular/core";

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'}) // чтобы angular определил сервис, передаем параметр для автоматической регистрации
export class TodosService {
  public todos: Todo[] = [
    {id: 1, title: 'ts', completed: true, date: new Date()},
    {id: 2, title: 'angular', completed: false, date: new Date()},
    {id: 3, title: 'nx', completed: false, date: new Date()},
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
}
