import { Routes } from '@angular/router';
import { VendorMaster } from './pages/vendor-master/vendor-master';
import { Client } from './pages/client/client';
import { TodoApp } from './pages/todo-app/todo-app';
import { Employee } from './pages/employee/employee';
import { Login } from './pages/login/login';
import { Header } from './pages/header/header';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Header, 
        //canActivate: [authGuard],
        children: [
            {
                path: 'vendor',
                component: VendorMaster
            },
            {
                path: 'client',
                component: Client
            },
            {
                path: 'todo',
                component: TodoApp
            },
            {
                path: 'employee',
                component: Employee
            }
        ]
    }



];
