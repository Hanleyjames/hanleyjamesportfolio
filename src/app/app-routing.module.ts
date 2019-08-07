import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
