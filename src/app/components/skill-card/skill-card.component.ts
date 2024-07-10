import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
})
export class SkillCardComponent {
  @Input() hover: string = '';
  @Input() imageSkill: string = '';
}
