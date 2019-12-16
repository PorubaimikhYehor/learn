import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ITodoService } from '../i-todo.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/appStore.interface';
import { todosActionTypes } from '../store/constants/iTodo.constans';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})
export class ItemTodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private iTodoService: ITodoService,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
  }

  deleteTodo(): void {
    this.iTodoService.deleteTodo(this.todo.id)
      .subscribe(() => {
        console.log('delTodo');
        this.store.dispatch({
          type: todosActionTypes.DELETE,
          payload: this.todo
        });
      }
      );

  }
  changeCheck(): void {
    // console.log(this.todo);
    this.iTodoService.changeCheck(this.todo)
      .subscribe((payload) => {
        // console.log(value);
        this.store.dispatch({
          type: todosActionTypes.UPDATE,
          payload
        });
      }
      );
  }
}
