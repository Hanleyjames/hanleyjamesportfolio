import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hanleyjames-portfolio';
  loadLanding = true;
  loadContact = false;
  loadAbout = false;
  loadProjects = false;
  loadResume = false;
  
  landingSwitch(){
    if(this.loadLanding == false){
      this.loadLanding = true;
      this.loadContact = false;
      this.loadAbout = false;
      this.loadProjects = false;
      this.loadResume = false;
    }
  }
  contactSwitch(){
    if(this.loadContact == false){
      this.loadLanding = false;
      this.loadContact = true;
      this.loadAbout = false;
      this.loadProjects = false;
      this.loadResume = false;
    }
  }
  aboutSwitch(){
    if(this.loadAbout == false){
      this.loadLanding = false;
      this.loadContact = false;
      this.loadAbout = true;
      this.loadProjects = false;
      this.loadResume = false;
    }
  }
  projectSwitch(){
    if(this.loadProjects == false){
      this.loadLanding = false;
      this.loadContact = false;
      this.loadAbout = false;
      this.loadProjects = true;
      this.loadResume = false;
    }
  }
  resumeSwitch(){
    if(this.loadResume == false){
      this.loadLanding = false;
      this.loadContact = false;
      this.loadAbout = false;
      this.loadProjects = false;
      this.loadResume = true;
    }
  }
}
