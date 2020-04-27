import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({ // декоратор
  declarations: [ // регистрируем компоненты
    AppComponent, TodosComponent, TodoFormComponent
  ],
  imports: [ // регистрируем другие модули
    BrowserModule, // позволяет работать с angular в браузере
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // в поле передается компонент
})
export class AppModule { }
