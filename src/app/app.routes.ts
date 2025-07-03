import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { About } from './pages/about/about';
import { Machines } from './pages/machines/machines';
import { Routines } from './pages/routines/routines';
import { Exercises } from './pages/exercises/exercises';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'dashboard', component: Dashboard},
    {path: 'acerca', component: About},
    {path: 'maquinas', component: Machines},
    {path: 'rutinas', component: Routines},
    {path: 'ejercicios', component: Exercises},
    {path: '', redirectTo: 'login', pathMatch: 'full' },
];
