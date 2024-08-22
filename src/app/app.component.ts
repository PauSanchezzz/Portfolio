import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RolComponent } from './components/rol/rol.component';
import { ContactComponent } from './components/contact/contact.component';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    SkillCardComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    RolComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#ECE1FF',
      cursorColor: '#ECE1FF',
    });

    writer
      .strings(
        1700,
        'Frontend Developer',
        'Backend Developer',
        'UX/UI Designer',
        'Data Analyst',
      )
      .start();
  }
}
