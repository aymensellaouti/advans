import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';
import {LoggerService} from './logger.service';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  logger() {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index === - 1) {
      alert('Introuvable');
    } else {
      this.todos.splice(index, 1);
    }
  }
}
