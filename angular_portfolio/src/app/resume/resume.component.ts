import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  public honor = [
    {sno: 1, imgCaption: "Gold Medal Awarding", url: "./assets/awarding.jpg"},
    {sno: 2, imgCaption: "Gold Medal", url: "./assets/goldmedal.jpg"},
    {sno: 3, imgCaption: "Gold Medal with Certificate", url: "./assets/certificate.jpg"},
    {sno: 4, imgCaption: "Honors Board", url: "./assets/honorboard.jpg"}
  ]
}
