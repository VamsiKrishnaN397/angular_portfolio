import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainBlockComponent } from '../main-block/main-block.component';

@Component({
  selector: 'app-workexperience',
  standalone: true,
  imports: [SharedModule, MainBlockComponent],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.css'
})
export class WorkexperienceComponent {

}