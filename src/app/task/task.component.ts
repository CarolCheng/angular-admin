import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../protocol/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  bEditable: Boolean = true;
  checked = false;

  constructor() {
  }

  ngOnInit() {
  }
  onShowEdit() {
    if (this.bEditable) {
      this.bEditable = false;
    }
  }
  onOpen(opened: boolean) {
     if (!this.bEditable) {
      this.bEditable = true;
     }
  }
  onClick(event: any) { // without type info
    console.log(event);
    if (event.checked) {
      this.task.status = 'Completed';
    } else {
      this.task.status = 'InProgress';
    }
  }
}
