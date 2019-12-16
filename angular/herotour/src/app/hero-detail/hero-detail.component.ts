import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/appstore.interface';
import { heroesActionTypes } from '../store/constants/heroes.constants';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<AppStore>,
  ) { }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.select('heroes')
      .subscribe(value => {
        const heroId: number = value.list.findIndex(item => item.id === id);
        this.hero = { ...value.list[heroId] };
      });
  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(hero => {
        console.log(hero);
        this.store.dispatch({
          type: heroesActionTypes.UPDATE,
          payload: hero
        });
        this.goBack();
      });
  }

  ngOnInit() {
    this.getHero();
  }
}
