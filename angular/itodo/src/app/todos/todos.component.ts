import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { List } from '../list';
import { ITodoService } from '../i-todo.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/appStore.interface';
import { todosActionTypes, listsActionTypes } from '../store/constants/iTodo.constans';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];
  @Input() selectedList: List;

  // nextTodo: string;
  nextTodo: Todo = new Todo;
  // nextTodo: Todo = {
  //   discription: '',
  //   // listName: this.selectedList.name,
  //   isChecked: false
  // };

  title(): string {
    return this.selectedList ? this.selectedList.name : 'Please, select a list';
  }

  constructor(
    private iTodoService: ITodoService,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
  }

  addTodo(): void {
    // console.log(!this.nextTodo.discription.trim());
    if (this.nextTodo.discription && !!this.nextTodo.discription.trim()) {
      this.nextTodo.listId = this.selectedList.id;
      this.nextTodo.isChecked = false;
      this.iTodoService.addTodo(this.nextTodo)
        .subscribe((payload) => {
          this.store.dispatch({
            type: todosActionTypes.ADD,
            payload
          });
          this.nextTodo.discription = '';
        });
    }

  }


  deleteList(): void {
    this.iTodoService.deleteList(this.selectedList.id)
      .subscribe(() => {
        this.store.dispatch({
          type: listsActionTypes.DELETE,
          payload: this.selectedList
        });
        this.store.dispatch({
          type: listsActionTypes.CHOOSE,
          payload: null,
        });
      }
      );
  }
}
