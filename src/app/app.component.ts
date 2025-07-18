import { Component }    from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListPage } from './pages/user-list/user-list.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserListPage
  ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
