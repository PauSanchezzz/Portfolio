import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
})
export class ContactCardComponent {
  @Input() imageCard: string = '';
  @Input() title: string = '';
}
