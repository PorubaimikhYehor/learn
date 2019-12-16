import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/appstore.interface';
import { HeroesList } from '../store/models/heroeslist.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    // private heroService: HeroService
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.select('heroes')
      .subscribe((value: HeroesList) => this.heroes = value.list.slice(0, 4)
      );
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(
  //       (heroes: Hero[]) => {
  //         this.heroes = heroes.slice(0, 4);
  //       }
  //     );
  // }
}
