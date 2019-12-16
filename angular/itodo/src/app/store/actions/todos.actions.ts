import { Action } from '@ngrx/store';
import { todosActionTypes } from '../constants/iTodo.constans';
import { Todo } from 'src/app/todo';


export class Load implements Action {
  readonly type = todosActionTypes.LOAD;
  constructor(
    public payload: Todo[]
  ) { }
}

export class Update implements Action {
  readonly type = todosActionTypes.UPDATE;
  constructor(
    public payload: Todo
  ) { }
}

export class Add implements Action {
  readonly type = todosActionTypes.ADD;
  constructor(
    public payload: Todo
  ) { }
}

export class Delete implements Action {
  readonly type = todosActionTypes.DELETE;
  constructor(
    public payload: Todo
  ) { }
}

export type TodosActionUnion = Load | Update | Add | Delete;

