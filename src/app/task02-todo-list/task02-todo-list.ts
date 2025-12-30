import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task02-todo-list',
  imports: [FormsModule],
  templateUrl: './task02-todo-list.html',
  styleUrl: './task02-todo-list.css',
})
export class Task02TodoList {

  task = '';
  taskList:{id:number,task:string}[]=[];

  addTask(){
    // console.log(this.task);

    const val = this.task.trim();

    if(!val){
      alert('Please Enter task!!!');
      return;
    }

    const exist = this.taskList.find(t=>t.task.toLowerCase() === val.toLowerCase());

    if(exist){
      alert('Task alredy Exists!!!');
      return;
    }

    this.taskList.push({id:this.taskList.length+1,task:this.task});
    this.task = '';
    
  }

  deleteTask(taskId:number){
    this.taskList = this.taskList.filter((item)=>item.id != taskId);
    // console.log('TaskId ',taskId,' is deleted!!!');
  }
}
