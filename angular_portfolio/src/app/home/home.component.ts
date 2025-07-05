import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainBlockComponent } from '../main-block/main-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MainBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
