import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  Skills = [
    {
      colorHover: 'hover:drop-shadow-purple',
      imageSkill: './Portfolio/svg/angular.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: './Portfolio/svg/tailwind.svg',
    },
    {
      colorHover: 'hover:drop-shadow-orange',
      imageSkill: './Portfolio/svg/html.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: './Portfolio/svg/css.svg',
    },
    {
      colorHover: 'hover:drop-shadow-yellow',
      imageSkill: './Portfolio/svg/js.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: './Portfolio/svg/ts.svg',
    },
    {
      colorHover: 'hover:drop-shadow-orange',
      imageSkill: './Portfolio/svg/figma.svg',
    },
    {
      colorHover: 'hover:drop-shadow-red',
      imageSkill: './Portfolio/svg/laravel.svg',
    },
    {
      colorHover: 'hover:drop-shadow-lightgreen',
      imageSkill: './Portfolio/svg/nodejs.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: './Portfolio/svg/postgresql.svg',
    },
    {
      colorHover: 'hover:drop-shadow-darkgreen',
      imageSkill: './Portfolio/svg/mongodb.svg',
    },
    {
      colorHover: 'hover:drop-shadow-purple',
      imageSkill: './Portfolio/svg/kotlin.svg',
    },
    {
      colorHover: 'hover:drop-shadow-white',
      imageSkill: './Portfolio/svg/jetpackCompose.svg',
    },
    {
      colorHover: 'hover:drop-shadow-yellow',
      imageSkill: './Portfolio/svg/firebase.svg',
    },
    {
      colorHover: 'hover:drop-shadow-red',
      imageSkill: './Portfolio/svg/xml.svg',
    },
    {
      colorHover: 'hover:drop-shadow-yellow',
      imageSkill: './Portfolio/svg/powerBi.svg',
    },
    {
      colorHover: 'hover:drop-shadow-darkgreen',
      imageSkill: './Portfolio/svg/excel.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: './Portfolio/svg/bd.svg',
    },
  ];
}
