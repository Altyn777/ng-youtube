import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ // декоратор
  declarations: [ // регистрируем компоненты
    AppComponent
  ],
  imports: [ // регистрируем другие модули
    BrowserModule // позволяет работать с angular в браузере
  ],
  providers: [],
  bootstrap: [AppComponent] // в поле передается компонент
})
export class AppModule { }
