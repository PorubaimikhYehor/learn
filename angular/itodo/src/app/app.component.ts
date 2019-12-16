import { Component, OnInit } from '@angular/core';
import { ITodoService } from './i-todo.service';
import { Store, select } from '@ngrx/store';
import { AppStore } from './store/models/appStore.interface';
import { listsActionTypes, todosActionTypes } from './store/constants/iTodo.constans';
import { TodoList } from './store/models/todoLIst.interface';
import { selectList, selectLists, selectTodos, selectActiveTodos } from './store/selectors/selectors';
import { List } from './list';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'itodo';
  todoList: TodoList;

  activeTodos: (Todo[] | null | undefined);
  // selectedList: List;
  // selectedTodos: Todo[];
  // lists: List[];

  constructor(
    private iTodoService: ITodoService,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.select('todoList')
      .subscribe((value) => {
        // console.log(value);
        this.todoList = { ...value };
        // this.activeTodos = this.getActiveTodos(value.selectedList, value.todos);
        this.getActiveTodos();
      });
    this.getData();
  }


  getActiveTodos(): void {
    this.store.pipe(
      select(
        selectActiveTodos
      ))
      .subscribe((value) =>
        this.activeTodos = value
      );
  }


  // getActiveTodos(selectedList: List, todos: Todo[]): Todo[] {
  //   if (selectedList && todos) {
  //     return todos.filter((todo: Todo) => todo.listId === selectedList.id);
  //   } else {
  //     return null;
  //   }
  // }

  chooseLIST(list): void {
    // console.log(list);
    this.store.dispatch({
      type: listsActionTypes.CHOOSE,
      payload: list,
    });
  }

  getData(): void {
    this.iTodoService.getData('lists')
      .subscribe((payload) => {
        // console.log(payload);
        this.store.dispatch({
          type: listsActionTypes.LOAD,
          payload
        });
        this.iTodoService.getData('todos')
          .subscribe((value) => {
            // console.log(payload);
            const todos = [...value];
            this.store.dispatch({
              type: todosActionTypes.LOAD,
              payload: todos,
            });
          });
      });
  }

}
