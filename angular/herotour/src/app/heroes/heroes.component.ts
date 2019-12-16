import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/appstore.interface';
import { HeroesList } from '../store/models/heroeslist.interface';
import { heroesActionTypes } from '../store/constants/heroes.constants';
import { Add } from '../store/action/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    console.log('----------------heroes-----------------');

    this.store.select('heroes')
      .subscribe(
        (value: HeroesList) => {
          this.heroes = value.list;
          console.log(value.list);
        }
      );
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero)
      .subscribe(
        () => {
          this.store.dispatch({
            type: heroesActionTypes.DELETE,
            payload: this.heroes.filter(h => h !== hero)
          });
        });
  }

  add(name: string): void {
    name = name.trim();
    if (name) {
      this.store.dispatch(new Add({ name } as Hero));
    }
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       console.log(hero);
  // const payload: Hero[] = [...this.heroes];
  // payload.push(hero);
  // // console.log(payload);
  // this.store.dispatch(
  //   {
  //     type: heroesActionTypes.ADD,
  //     payload,
  //   });
  // });

}
