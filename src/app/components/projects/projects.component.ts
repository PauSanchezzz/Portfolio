import { Component } from '@angular/core';
import { TechnologyProjectComponent } from '../technology-project/technology-project.component';
import { ButtonProjectComponent } from '../button-project/button-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TechnologyProjectComponent, ButtonProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  Projects = [
    {
      titleProject: 'Cat Chat',
      descriptionProject:
        'Cat Chat es una aplicación de chat exclusiva para amantes de los gatos. Aquí, los usuarios pueden registrarse con su correo electrónico, contraseña y nombre de usuario, y luego elegir entre cinco razas de gatos: Bombay, Tuxedo, Siames, Calico y Carey.',
      imageProject:
        'https://github.com/PauSanchezzz/CatChat/blob/main/src/client/public/cat3.png?raw=true',
      technologies: [
        {
          background: 'bg-tecnology-blue',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: '/svg/tailwind.svg',
          title: 'Tailwind CSS',
        },
        {
          background: 'bg-tecnology-lightgreen',
          colorHover: 'hover:drop-shadow-lightgreen',
          imgTechnology: '/svg/node.svg',
          title: 'Node.js',
        },
        {
          background: 'bg-tecnology-blue',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: '/svg/postgresql.svg',
          title: 'PostgreSQL',
        },
        {
          background: 'bg-black',
          colorHover: 'hover:drop-shadow-tecnology-black',
          imgTechnology: '/svg/socket.svg',
          title: 'Socket.io',
        },
      ],
    },
  ];
}
