import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: []
})
export class SharedModule { }
