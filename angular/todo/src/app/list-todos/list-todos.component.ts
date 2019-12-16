import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements DoCheck {

  @Input() todos: Todo[];
  @Output() changeCheckTodo: EventEmitter<Todo> = new EventEmitter();

  filterState: string = 'all';
  visibleTodos: Todo[];
  filterMessage: string;
  constructor() { }

  ngDoCheck() {
    // console.log('init');
    this.getVisibleTodos();
    this.createFilterMessage();

  }

  createFilterMessage(): string {
    if (this.todos) {
      switch (this.visibleTodos.length) {
        case 1:
          return this.filterMessage = 'one todo';
        case 0:
          return this.filterMessage = 'none todos';
        default:
          return this.filterMessage = `${this.visibleTodos.length} todos`;
      }
    }
  }


  changeCheckTODO(item: Todo): void {
    this.changeCheckTodo.emit(item);
  }
  changeFilter(state: string): void {
    this.filterState = state;
    this.getVisibleTodos();
  }

  getVisibleTodos(): void {
    if (this.todos) {
      this.visibleTodos = this.todos.filter((todo) =>
       (this.filterState === 'all') ||
        (todo.isChecked && this.filterState === 'done') ||
        (!todo.isChecked && this.filterState === 'active'));
      }
    }
  }
