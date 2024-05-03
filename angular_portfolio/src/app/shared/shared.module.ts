import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: []
})
export class SharedModule { }
