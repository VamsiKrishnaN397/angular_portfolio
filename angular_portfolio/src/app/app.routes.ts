import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'education', component: EducationComponent, pathMatch: 'full' },
    { path: 'work-experience', component: WorkexperienceComponent, pathMatch: 'full' },
    { path: 'resume', component:  ResumeComponent, pathMatch: 'full' },
    { path: 'contact', component:  ContactComponent, pathMatch: 'full' },
    { path: 'skills', component:  SkillsComponent, pathMatch: 'full' },
    { path: 'certification', component:  CertificationsComponent, pathMatch: 'full' },
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}] 
})

export class AppRoutingModule {}