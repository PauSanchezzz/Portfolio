import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'technology-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-project.component.html',
})
export class TechnologyProjectComponent {
  @Input() background: string = '';
  @Input() hover: string = '';
  @Input() widthCard: string = '';
  @Input() widthImage: string = '';
  @Input() imgTechnology: string = '';
  @Input() title: string = '';
}
