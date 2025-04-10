import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Task {
  description: string,
  complete: boolean
}

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})


export class TodoComponent {

  constructor(private authService: AuthService, private router: Router) {}

  todoList: Task[] = []



  clickLogOut(): void {
    this.authService.logout();
    this.router.navigate(['login'])
  }

  addTask(input:string): void {
    this.todoList.push(
      { 
        description: input,
        complete: false
      }
    )
  }

  completeTask(index: number) : void {
    this.todoList[index].complete = true
    
  }

  deleteTask(index: number) : void {
    const newArray = this.todoList.splice(index, 1)
    console.log(newArray)
  }
}
