import { Action } from '@ngrx/store';
import { heroesActionTypes } from '../constants/heroes.constants';
import { Hero } from 'src/app/hero';

export class Load implements Action {
  readonly type = heroesActionTypes.LOAD;
}
export class LoadSuccess implements Action {
  readonly type = heroesActionTypes.LOAD_SUCCESS;
  constructor(
    public payload: Hero[]) { }
}
export class LoadFailed implements Action {
  readonly type = heroesActionTypes.LOAD_FAILED;
  constructor() { }
}



export class Add implements Action {
  readonly type = heroesActionTypes.ADD;
  constructor(
    public payload: Hero
  ) { }
}

export class AddSuccess implements Action {
  readonly type = heroesActionTypes.ADD_SUCCESS;
  constructor(
    public payload: Hero
  ) { }
}
export class AddFailed implements Action {
  readonly type = heroesActionTypes.ADD_FAILED;
  constructor(
    // public payload: Hero
  ) { }
}


export class Delete implements Action {
  readonly type = heroesActionTypes.DELETE;
  constructor(
    public payload: Hero[]
  ) { }
}

export class Update implements Action {
  readonly type = heroesActionTypes.UPDATE;
  constructor(
    public payload: Hero
  ) { }
}


export type heroesActionUnion = Load | Add | Delete | Update | LoadSuccess | LoadFailed | AddSuccess | AddFailed;
