import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  taskArray = [{ taskName: 'Bathing', isCompleted: false }];
taskForm: any;
  constructor() {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,  
    });
    form.reset()
  };

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }
}
