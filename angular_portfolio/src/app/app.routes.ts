import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
    // { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    // { path: 'portfolio', loadChildren: () => import('./ui/ui.module').then((c) => m.UiModule), component: UiComponent }
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'education', component: EducationComponent, pathMatch: 'full' },
    { path: 'work-experience', component: WorkexperienceComponent, pathMatch: 'full' },
    { path: 'resume', component:  ResumeComponent, pathMatch: 'full' },
    { path: 'contact', component:  ContactComponent, pathMatch: 'full' },
    { path: 'skills', component:  SkillsComponent, pathMatch: 'full' },
    { path: 'certification', component:  CertificationsComponent, pathMatch: 'full' },
    {path: '**', component: HomeComponent}
];
