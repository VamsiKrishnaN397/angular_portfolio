import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatStepperModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatStepperModule
  ],
  declarations: []
})
export class SharedModule { }
