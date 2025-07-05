import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainBlockComponent } from '../main-block/main-block.component';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SharedModule, MainBlockComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  public certification = [
    {sno: 1, name: "Technical Interview Preparation by Codepath", url: "./assets/codepath_tip.png"},
    {sno: 2, name: "Intermediate Web Development by Codepath", url: "./assets/codepath_react.png"},
    {sno: 3, name: "Basics of Web Development by Masai", url: "./assets/masai.png"},
    {sno: 4, name: "Foundational C# with Microsoft", url: "./assets/fcccsharp.png"},
    {sno: 5, name: "Generative AI Fundamentals by Databricks", url: "./assets/databricksai.png"},
    {sno: 6, name: "Postman API Fundamentals Student Expert", url: "./assets/postmanbadge.png"},
    {sno: 7, name: "Responsive Web Design by Free Code Camp", url: "./assets/fccrwd.png"},
    {sno: 8, name: "Cyber Security Essentials by Everi", url: "./assets/everitbasics.png"},
    {sno: 9, name: "Sexual Harrasment Preventaion at work place by Everi", url: "./assets/everikelphr.png"},
    {sno: 10, name: "Security Awareness Training at work place by Phoenix", url: "./assets/phoenixit.png"},
    {sno: 11, name: "Introduction to Artificial Intelligence by TCS", url: "./assets/tcsai.png"},
    {sno: 12, name: "Introduction to C Programming by TCS", url: "./assets/tcsc.png"},
    {sno: 13, name: "Cyber Security Essentials by Cisco", url: "./assets/cscisco.png"},
    {sno: 14, name: "Java Programming by Oracle", url: "./assets/javaoracle.png"}
  ];
}
