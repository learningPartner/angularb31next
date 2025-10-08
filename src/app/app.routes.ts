import { Routes } from '@angular/router';
import { VendorMaster } from './pages/vendor-master/vendor-master';
import { Client } from './pages/client/client';
import { TodoApp } from './pages/todo-app/todo-app';
import { Employee } from './pages/employee/employee';
import { Login } from './pages/login/login';
import { Header } from './pages/header/header';
import { authGuard } from './guard/auth-guard';
import { Signal } from './pages/signal/signal';
import { Viewchild } from './pages/viewchild/viewchild';
import { AdvReactive } from './pages/adv-reactive/adv-reactive';

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
                path: 'adv-rec',
                component: AdvReactive
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
            },
            {
                path: 'signal',
                component: Signal
            },
            {
                path: 'viewchild',
                component: Viewchild
            }
        ]
    }



];
