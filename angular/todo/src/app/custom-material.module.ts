import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule, MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  BrowserAnimationsModule,
  MatMenuModule,
  MatTooltipModule,
  MatChipsModule
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class CustomMaterialModule { }
