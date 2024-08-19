import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./pages/users/user-detail/user-detail.component').then(
        (m) => m.UserDetailComponent
      ),
  },

  {
    path: 'req',
    loadComponent: () =>
      import('./pages/req/req.component').then((m) => m.ReqComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'req',
  },
];
