import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactCardComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email: string = 'pausanchezt12@gmail.com';
  copied: boolean = false;
  timeoutId: any;
  copyEmail() {
    const input = document.createElement('input');
    input.value = this.email;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    this.copied = true;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
