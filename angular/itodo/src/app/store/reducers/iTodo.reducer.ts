import { TodoList } from '../models/todoLIst.interface';
import { ListsActionUnion } from '../actions/lists.actions';
import { TodosActionUnion } from '../actions/todos.actions';
import { listsActionTypes, todosActionTypes } from '../constants/iTodo.constans';

// import { List } from 'src/app/list';
import { Todo } from 'src/app/todo';
import { List } from 'src/app/list';

const initialState: TodoList = {
  lists: [],
  todos: [],
  selectedList: null
};
export function ITodoReducer(state: TodoList = initialState, action: ListsActionUnion | TodosActionUnion) {
  // console.log(state);
  const todos: Todo[] = [...state.todos];
  const lists: List[] = [...state.lists];
  switch (action.type) {
    case listsActionTypes.DELETE:
      let listId: number = state.lists.findIndex((list: List) => list.id === action.payload.id);
      lists.splice(listId, 1);
      return {
        ...state,
        lists
      };
    case listsActionTypes.ADD:
      lists.push(action.payload);
      return {
        ...state,
        lists,
      };
    case todosActionTypes.DELETE:
      let todoId: number = state.todos.findIndex((todo: Todo) => todo.id === action.payload.id);
      todos.splice(todoId, 1);
      return {
        ...state,
        todos,
      };
    case todosActionTypes.ADD:
      todos.push(action.payload);
      return {
        ...state,
        todos
      };
    case todosActionTypes.UPDATE:
      // console.log('changeCheck');
      todoId = state.todos.findIndex((todo: Todo) => todo.id === action.payload.id);
      todos[todoId] = action.payload;
      return {
        ...state,
        todos
      };
    case listsActionTypes.CHOOSE:
      return {
        ...state,
        selectedList: action.payload
      };
    case listsActionTypes.LOAD:
      return {
        ...state,
        lists: action.payload
      };
    case todosActionTypes.LOAD:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
}
