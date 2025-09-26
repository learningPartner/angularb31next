import { Component, OnInit, Sanitizer, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-app',
  imports: [FormsModule],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css'
})
export class TodoApp implements OnInit {

  //taskList: ITask [] = [];
  taskList = signal<ITask[]>([]);
  filteredTaskList = signal<ITask[]>([]);
  taskName: string = "";
  isFilterRecordPresent = signal<boolean>(true);
  htmlCode = "<script>alert('welcome') </script> <h1>  Hellow </h1>";
  sanituizeHtml! :SafeHtml;

  constructor(private sanitiz: DomSanitizer) {
    this.sanituizeHtml =  this.sanitiz.bypassSecurityTrustHtml(this.htmlCode)
  }
  ngOnInit(): void {
    debugger;
    const localData = localStorage.getItem("taskList");
    if (localData != null) {
      const parseData = JSON.parse(localData);
      this.taskList.set(parseData);
      this.filteredTaskList.set(parseData);
    }
  }

  onAddTask() {
    debugger;
    const taskObj = {
      taskName: this.taskName,
      taskStatus: "New"
    } as ITask;

    this.taskList.update(oldList => ([...oldList, taskObj]));
    this.filteredTaskList.set(this.taskList())
    localStorage.setItem('taskList', JSON.stringify(this.taskList()))
  }

  onTextChange() {
    const filterData = this.taskList().filter(m => m.taskName.toLocaleLowerCase().startsWith(this.taskName.toLocaleLowerCase()));
    if (filterData.length != 0) {
      this.isFilterRecordPresent.set(true);
      this.filteredTaskList.set(filterData);
    } else {
      this.isFilterRecordPresent.set(false);
    }
  }


  onStatuFilter(event: any) {
    const status = event.target.value;
    if (status == "All") {
       this.isFilterRecordPresent.set(true);
      const locatData=  this.taskList();
      this.filteredTaskList.set(locatData);
    } else {
      const filterData = this.taskList().filter(m => m.taskStatus.startsWith(status));
      if (filterData.length != 0) {
        this.isFilterRecordPresent.set(true);
        this.filteredTaskList.set(filterData);
      } else {
        this.isFilterRecordPresent.set(false);
      }
    }

  }

  chnageStatus(event: any,taskData: ITask) {
    const statrus=  event.target.value;
    taskData.taskStatus = statrus;
    this.taskList.set(this.filteredTaskList()); 
    localStorage.setItem('taskList', JSON.stringify(this.taskList()))
  }
}

export interface ITask {
  taskName: string;
  taskStatus: string;
}
