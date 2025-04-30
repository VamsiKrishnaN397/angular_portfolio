import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatGridListModule,
    MatLabel,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatGridListModule,
    MatLabel,
    MatInputModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule { }
