import { createSelector } from '@ngrx/store';
import { List } from '../../list';
import { Todo } from '../../todo';
import { AppStore } from '../models/appStore.interface';
import { TodoList } from '../models/todoLIst.interface';

export const selectList = (state: TodoList) => state.selectedList;
export const selectLists = (state: TodoList) => state.lists;
export const selectTodos = (state: TodoList) => state.todos;

export const selectActiveTodos = createSelector(
  selectList,
  selectTodos,
  (selectedList: List, todos: Todo[]) => {
    if (selectedList && todos) {
      return todos.filter((todo: Todo) => todo.listId === selectedList.id);
    } else {
      return null;
    }
  }
);
