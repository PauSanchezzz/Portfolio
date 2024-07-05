import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-project',
  standalone: true,
  imports: [],
  templateUrl: './button-project.component.html',
})
export class ButtonProjectComponent {
  @Input() imageButton: string = '';
  @Input() nameButton: string = '';
}
