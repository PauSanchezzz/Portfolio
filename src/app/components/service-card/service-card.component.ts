import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input() imgService: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
