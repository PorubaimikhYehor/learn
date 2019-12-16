import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ArticlePriceComponent } from './article-price/article-price.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReactiveFormComponent,
    ArticlePriceComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
