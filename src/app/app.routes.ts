import { Routes } from '@angular/router';
import { VendorMaster } from './pages/vendor-master/vendor-master';
import { Client } from './pages/client/client';
import { TodoApp } from './pages/todo-app/todo-app';

export const routes: Routes = [

    {
        path:'vendor',
        component:VendorMaster
    },
    {
        path:'client',
        component: Client
    },
    {
        path:'todo',
        component: TodoApp
    }

];
