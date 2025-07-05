import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { MainBlockComponent } from '../main-block/main-block.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SharedModule, MainBlockComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private router: Router) {}

  public honor = [
    {sno: 1, imgCaption: "Gold Medal Awarding", url: "./assets/awarding.jpg"},
    {sno: 2, imgCaption: "Gold Medal", url: "./assets/goldmedal.jpg"},
    {sno: 3, imgCaption: "Gold Medal with Certificate", url: "./assets/certificate.jpg"},
    {sno: 4, imgCaption: "Honors Board", url: "./assets/honorboard.jpg"}
  ]

  public masters = [
    {sno: 1, imgCaption: "Masters Graduation Ceremony", url: "./assets/gradedit.jpg"},
    {sno: 2, imgCaption: "Masters Diploma", url: "./assets/gradedit2.jpg"}
  ]

  enrouteToContact(){
    this.router.navigate(['/contact']);
  }
}
