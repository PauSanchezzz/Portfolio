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
      imageSkill: '/svg/angular.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: '/svg/tailwind.svg',
    },
    {
      colorHover: 'hover:drop-shadow-orange',
      imageSkill: '/svg/html.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: '/svg/css.svg',
    },
    {
      colorHover: 'hover:drop-shadow-yellow',
      imageSkill: '/svg/js.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: '/svg/ts.svg',
    },
    {
      colorHover: 'hover:drop-shadow-orange',
      imageSkill: '/svg/figma.svg',
    },
    {
      colorHover: 'hover:drop-shadow-red',
      imageSkill: '/svg/laravel.svg',
    },
    {
      colorHover: 'hover:drop-shadow-lightgreen',
      imageSkill: '/svg/nodejs.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: '/svg/postgresql.svg',
    },
    {
      colorHover: 'hover:drop-shadow-darkgreen',
      imageSkill: '/svg/mongodb.svg',
    },
    {
      colorHover: 'hover:drop-shadow-purple',
      imageSkill: '/svg/kotlin.svg',
    },
    {
      colorHover: 'hover:drop-shadow-white',
      imageSkill: '/svg/jetpackCompose.svg',
    },
    {
      colorHover: 'hover:drop-shadow-yellow',
      imageSkill: '/svg/firebase.svg',
    },
    {
      colorHover: 'hover:drop-shadow-red',
      imageSkill: '/svg/xml.svg',
    },
    {
      colorHover: 'hover:drop-shadow-yellow',
      imageSkill: '/svg/powerBi.svg',
    },
    {
      colorHover: 'hover:drop-shadow-darkgreen',
      imageSkill: '/svg/excel.svg',
    },
    {
      colorHover: 'hover:drop-shadow-blue',
      imageSkill: '/svg/bd.svg',
    },
  ];
}
