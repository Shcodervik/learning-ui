import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appsRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appsRoutes);
