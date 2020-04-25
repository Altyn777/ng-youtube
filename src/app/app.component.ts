import { Component } from '@angular/core';

@Component({ // декоратор
  selector: 'app-root', // поле selector
  templateUrl: './app.component.html', // в данном файле хранится шаблон этого компонента
  styleUrls: ['./app.component.scss'] // стили
})
export class AppComponent {
  title = 'ng-youtube';
}
