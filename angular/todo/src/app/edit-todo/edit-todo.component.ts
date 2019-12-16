import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteTodos: EventEmitter<Todo[]> = new EventEmitter();
  model = new Todo(false, '');

  isFocus = false;

  constructor(
  ) { }

  ngOnInit() {
  }
  changeFocus(focus: boolean): void {
    this.isFocus = focus;
  }

  addButtonDisabled(): boolean {
    return (this.model.description.length < 4) ? true : false;
  }

  deleteButtonDisabled(): boolean {
    if (this.todos) {
      return this.todos.find((item: Todo) => item.isChecked) ? false : true;
    }
  }

  postTodo(): void {
    console.log('-----------postTodo------------');
    this.addTodo.emit(this.model);
    this.model.description = '';
  }

  delTodos(): void {
    console.log('--------delTodos--------');
    this.deleteTodos.emit();
  }
}

