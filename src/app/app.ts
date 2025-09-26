import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetAPI } from "./pages/get-api/get-api";
import { VendorMaster } from "./pages/vendor-master/vendor-master";
import { Client } from "./pages/client/client";
import { TodoApp } from "./pages/todo-app/todo-app";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularb31next';
}
