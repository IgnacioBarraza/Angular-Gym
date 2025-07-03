import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { About } from './pages/about/about';
import { Machines } from './pages/machines/machines';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'dashboard', component: Dashboard},
    {path: 'acerca', component: About},
    {path: 'maquinas', component: Machines},
    {path: '', redirectTo: 'login', pathMatch: 'full' },
];
