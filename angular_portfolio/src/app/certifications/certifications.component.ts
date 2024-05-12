import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  public certification = [
    {sno: 1, name: "Basics of Web Development by Masai", url: "./assets/masai.png"},
    {sno: 2, name: "Foundational C# with Microsoft", url: "./assets/fcccsharp.png"},
    {sno: 3, name: "Generative AI Fundamentals by Databricks", url: "./assets/databricksai.png"},
    {sno: 4, name: "Postman API Fundamentals Student Expert", url: "./assets/postmanbadge.png"},
    {sno: 5, name: "Responsive Web Design by Free Code Camp", url: "./assets/fccrwd.png"},
    {sno: 6, name: "Cyber Security Essentials by Everi", url: "./assets/everitbasics.png"},
    {sno: 7, name: "Sexual Harrasment Preventaion at work place by Everi", url: "./assets/everikelphr.png"},
    {sno: 8, name: "Security Awareness Training at work place by Phoenix", url: "./assets/phoenixit.png"},
    {sno: 9, name: "Introduction to Artificial Intelligence by TCS", url: "./assets/tcsai.png"},
    {sno: 10, name: "Introduction to C Programming by TCS", url: "./assets/tcsc.png"},
    {sno: 11, name: "Cyber Security Essentials by Cisco", url: "./assets/cscisco.png"},
    {sno: 12, name: "Java Programming by Oracle", url: "./assets/javaoracle.png"}
  ];
}
