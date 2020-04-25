import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({ // декоратор
  declarations: [ // регистрируем компоненты
    AppComponent, TodosComponent
  ],
  imports: [ // регистрируем другие модули
    BrowserModule // позволяет работать с angular в браузере
  ],
  providers: [],
  bootstrap: [AppComponent] // в поле передается компонент
})
export class AppModule { }
