import { Injectable } from "@angular/core";
import { HeroService } from "src/app/hero.service";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { heroesActionTypes } from "../constants/heroes.constants";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Hero } from "src/app/hero";
import { Action } from '@ngrx/store';
import { AddSuccess, AddFailed, Add } from "../action/heroes.actions";

@Injectable()
export class HeroesEffectsService {

  @Effect()
  loadList$: Observable<Action> = this.actions$.pipe(
    ofType(heroesActionTypes.LOAD),
    mergeMap(
      action => this.heroServices.getHeroes().pipe(
        // If successful, dispatch success action with result
        map((data: Hero[]) => ({
          type: heroesActionTypes.LOAD_SUCCESS,
          payload: data
        })),
        // If request fails, dispatch failed action
        catchError(() => of({
          type: heroesActionTypes.LOAD_FAILED,
          payload: []
        }))
      )
    )
  );

  @Effect()
  addHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroesActionTypes.ADD),
    mergeMap((action: Add) =>
      this.heroServices.addHero(action.payload).pipe(
        map((hero: Hero) => new AddSuccess(hero)),
        catchError(() => of(new AddFailed()))
      )
    )
  )


  constructor(
    private heroServices: HeroService,
    private actions$: Actions
  ) { }

}
