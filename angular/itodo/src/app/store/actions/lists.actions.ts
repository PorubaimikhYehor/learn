import { Action } from '@ngrx/store';
import { listsActionTypes } from '../constants/iTodo.constans';
import { List } from 'src/app/list';


export class Load implements Action {
  readonly type = listsActionTypes.LOAD;
  constructor(
    public payload: List[]
  ) { }
}

export class Choose implements Action {
  readonly type = listsActionTypes.CHOOSE;
  constructor(
    public payload: List
  ) { }
}

export class Add implements Action {
  readonly type = listsActionTypes.ADD;
  constructor(
    public payload: List
  ) { }
}

export class Delete implements Action {
  readonly type = listsActionTypes.DELETE;
  constructor(
    public payload: List
  ) { }
}
export type ListsActionUnion = Load | Choose | Add | Delete;
