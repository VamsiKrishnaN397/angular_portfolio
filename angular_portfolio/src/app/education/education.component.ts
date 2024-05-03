import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class EducationComponent {
  flipM: string = 'inactive';
  flipB: string = 'inactive';
  flipI: string = 'inactive';
  flipS: string = 'inactive';

  public MCourseWork = [
    {sno: 1, id: "CS7830", name: "Machine Learning"},
    {sno: 2, id: "CS7470", name: "Distributed Computing"},
    {sno: 3, id: "CS6470", name: "Advanced Computer Networks"},
    {sno: 4, id: "CS7200", name: "Algorithm Design and Analysis"},
    {sno: 5, id: "CS6900", name: "Deep Learnig"},
    {sno: 6, id: "CS7800", name: "Information Retrieval"},
    {sno: 7, id: "CS6430", name: "Cyber Network Security"},
    {sno: 8, id: "CS6460", name: "Security Attacks and Defenses"},
    {sno: 9, id: "CS6400", name: "Cryptogrpahy and Data Security"},
    {sno: 10, id: "CS6700", name: "Trust Networks"}
  ];

  public BCourseWork = [
    {sno: 1, id: "CS132AD", name: "Computer Programming in C"},
    {sno: 2, id: "CS135AF", name: "Design and Analysis of Algorithms"},
    {sno: 3, id: "CS135AE", name: "Data Communication and Computer Networks"},
    {sno: 4, id: "CS134BD", name: "Formal Languages & Automata theory"},
    {sno: 5, id: "CS133AG", name: "Data Structures through C++"},
    {sno: 6, id: "CS133BM", name: "Object Oriented Programming through Java"},
    {sno: 7, id: "CS134AP", name: "Database Management Systems"},
    {sno: 8, id: "CS134BU", name: "Operating Systems"},
    {sno: 9, id: "CS134AK", name: "Computer Organization & Architecture"},
    {sno: 10, id: "CS135BM", name: "Software Engineering"},
    {sno: 11, id: "CS136AQ", name: "Compiler Design"},
    {sno: 12, id: "CS136EN", name: "Web Technologies"},
    {sno: 13, id: "CS136AW", name: "Cryptography and Network Security"},
    {sno: 14, id: "CS136FT", name: "Principles of Computer Communication and Networks"},
    {sno: 15, id: "CS137BQ", name: "Data Mining"},
    {sno: 16, id: "CS137GA", name: "Principles of Programming Languages"},
    {sno: 17, id: "CS137HB", name: "Software Process & Project Management"},
    {sno: 18, id: "CS137BC", name: "Cloud Computing"},
    {sno: 19, id: "CS137GD", name: "Python Programming"},
    {sno: 20, id: "CS137HB", name: "Software Process & Project Management"},
    {sno: 21, id: "CS133EK", name: "Real Time Systems"},
    {sno: 22, id: "CS138AC", name: "Advanced Algorithms"},
    {sno: 23, id: "CS136BC", name: "Design Patterns"},
  ];

  toggleFlip(type: string) {
    if(type == "M"){
      this.flipM = (this.flipM == 'inactive') ? 'active' : 'inactive';
    }
    if(type == "B"){
      this.flipB = (this.flipB == 'inactive') ? 'active' : 'inactive';
    }
    if(type == "I"){
      this.flipI = (this.flipI == 'inactive') ? 'active' : 'inactive';
    }
    if(type == "S"){
      this.flipS = (this.flipS == 'inactive') ? 'active' : 'inactive';
    }
  }
}
