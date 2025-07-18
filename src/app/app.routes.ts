import { Routes } from '@angular/router';
import { UserListPage } from './pages/user-list/user-list.page';

export const routes: Routes = [
  { path: '',      redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListPage },
];
