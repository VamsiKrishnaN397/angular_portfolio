import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainBlockComponent } from '../main-block/main-block.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule, MainBlockComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
