import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';


const MODULES = [
  MatGridListModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CustomMaterialModule { }
