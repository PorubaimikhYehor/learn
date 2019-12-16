import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})
export class ItemTodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() changeCheckTodo: EventEmitter<Todo> = new EventEmitter ();
    constructor(
      private todoService: TodoService,
  ) { }

  ngOnInit() {
  }

  changeCheckTODO(): void {
    this.changeCheckTodo.emit(this.todo);
  }
}
