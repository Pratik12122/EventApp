import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
              <nav class="navbar navbar-inverse bg-inverse">
              <a [routerLink]="['dashboard']">Dashboard</a>
              <a [routerLink]="['form']">Add Event Here List</a>
              </nav>
              <router-outlet></router-outlet>
              `
})
export class AppComponent {
  title = 'app';
}
