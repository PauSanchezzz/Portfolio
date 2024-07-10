import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { Title } from '@angular/platform-browser';
import { title } from 'process';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  InformationCardService = [
    {
      title: 'Diseño Web UI/UX',
      image: './Portfolio/svg/design.svg',
      description:
        'Conocimiento en la creación de interfaces de usuario intuitivas y atractivas, siempre pensando en la mejor experiencia para el usuario.',
    },
    {
      title: 'Desarrollo Frontend',
      image: './Portfolio/svg/frontend.svg',
      description:
        'Conocimiento en el desarrollo de interfaces web modernas y responsivas empleando tecnologías como Angular, HTML, CSS y JavaScript.',
    },
    {
      title: 'Desarrollo Backend',
      image: './Portfolio/svg/backend.svg',
      description:
        'Experiencia con Laravel, Node.js y bases de datos tanto relacionales como no relacionales, garantizando sistemas robustos y eficientes.',
    },
    {
      title: 'Desarrollo Android',
      image: './Portfolio/svg/mobile.svg',
      description:
        'Habilidades en desarrollo Android utilizando MVVM, Kotlin, Firebase, Jetpack Compose y XML para crear aplicaciones atractivas y funcionales.',
    },
    {
      title: 'Análisis de datos',
      image: './Portfolio/svg/data.svg',
      description:
        'Habilidad en la gestión y análisis de datos utilizando bases de datos, Power BI y Excel, proporcionando insights valiosos para la toma de decisiones.',
    },
  ];
}
