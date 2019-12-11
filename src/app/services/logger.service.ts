import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  // todos: Todo[];
  constructor() { }
  logger(message: any) {
    console.log(message);
  }
}
