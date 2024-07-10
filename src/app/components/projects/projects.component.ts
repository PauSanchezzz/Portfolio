import { Component } from '@angular/core';
import { TechnologyProjectComponent } from '../technology-project/technology-project.component';
import { ButtonProjectComponent } from '../button-project/button-project.component';
import { CommonModule } from '@angular/common';
import { link } from 'node:fs';

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
      github: 'https://github.com/PauSanchezzz/CatChat',
      figma: '',
      powerbi: '',
      technologies: [
        {
          background: 'bg-tecnology-blue',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: './Portfolio/svg/tailwind.svg',
          title: 'Tailwind CSS',
        },
        {
          background: 'bg-tecnology-lightgreen',
          colorHover: 'hover:drop-shadow-lightgreen',
          imgTechnology: './Portfolio/svg/node.svg',
          title: 'Node.js',
        },
        {
          background: 'bg-tecnology-blue',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: './Portfolio/svg/postgresql.svg',
          title: 'PostgreSQL',
        },
        {
          background: 'bg-black',
          colorHover: 'hover:drop-shadow-tecnology-black',
          imgTechnology: './Portfolio/svg/socket.svg',
          title: 'Socket.io',
        },
      ],
    },
    {
      titleProject: 'Dashboard - Animales con Microchip',
      descriptionProject:
        'Este dashboard, basado en un documento de Datos Abiertos de Bogotá, muestra la cifra de animales registrados hasta 2019 con microchips en diferentes zonas de la ciudad. Relaciona hembras y machos, especies (felinos y caninos), razas preferidas por estratos, y proporciona una lista de nombres, destacando los más frecuentes y los únicos.',
      imageProject: './Portfolio/dashboard.png',
      github: '',
      figma: '',
      powerbi:
        'https://app.powerbi.com/view?r=eyJrIjoiMWVlYjFjZjEtZmU1Yy00MDZiLWFhYTItYjk0NDg5ZjBlODUwIiwidCI6ImQ1MTM4OGVmLTZhYjAtNDM2My05Zjk0LWQ1NjY0NGE0NTk3MCIsImMiOjR9',
      technologies: [
        {
          background: 'bg-[#4CAB7B]',
          colorHover: 'hover:drop-shadow-darkgreen',
          imgTechnology: './Portfolio/svg/excel.svg',
          title: 'Excel',
        },
        {
          background: 'bg-yellow-600',
          colorHover: 'hover:drop-shadow-yellow',
          imgTechnology: './Portfolio/svg/powerBi.svg',
          title: 'Power BI',
        },
        {
          background: 'bg-[#134D88]',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: './Portfolio/svg/bd.svg',
          title: 'DAX',
        },
      ],
    },
    {
      titleProject: 'Portafolio Personal',
      descriptionProject:
        'Sitio web desarrollado para mostrar mis habilidades, proyectos y experiencias como desarrolladora. Creado con Angular 17+, HTML, CSS y Tailwind. Este portafolio incluye secciones dedicadas a mis proyectos destacados, habilidades técnicas, servicios y contacto. Además, cuenta con un diseño responsive y un menú superpuesto al contenido para una navegación intuitiva en dispositivos móviles.',
      imageProject: './Portfolio/portfolio.jpg',
      github: 'https://github.com/PauSanchezzz/Portfolio/tree/main',
      figma: '',
      powerbi: '',
      technologies: [
        {
          background: 'bg-background',
          colorHover: 'hover:drop-shadow-purple',
          imgTechnology: './Portfolio/svg/angular.svg',
          title: 'Angular',
        },
        {
          background: 'bg-tecnology-blue',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: './Portfolio/svg/tailwind.svg',
          title: 'Tailwind CSS',
        },
        {
          background: 'bg-orange-700',
          colorHover: 'hover:drop-shadow-orange',
          imgTechnology: './Portfolio/svg/html.svg',
          title: 'HTML',
        },
        {
          background: 'bg-tecnology-blue',
          colorHover: 'hover:drop-shadow-tecnology-blue',
          imgTechnology: './Portfolio/svg/css.svg',
          title: 'CSS',
        },
      ],
    },
    {
      titleProject: 'Life Chronicles',
      descriptionProject:
        'Aplicación móvil desarrollada con Kotlin y Jetpack Compose que ofrece una lista variada de lugares y planes en Bogotá. Permite explorar categorías de actividades con descripciones e imágenes, y cuenta con funciones de inicio de sesión, registro y perfil de usuario, utilizando Firebase. El proyecto fue desarrollado en colaboración con',
      imageProject: './Portfolio/android.jpg',
      github: 'https://github.com/PauSanchezzz/LifeChronicles',
      figma:
        'https://www.figma.com/design/iNQglGD2qkIdZ7rHrJ1zBL/Componentes-M3?node-id=0-1',
      powerbi: '',
      technologies: [
        {
          background: 'bg-background',
          colorHover: 'hover:drop-shadow-purple',
          imgTechnology: './Portfolio/svg/kotlin.svg',
          title: 'Kotlin',
        },
        {
          background: 'bg-yellow-600',
          colorHover: 'hover:drop-shadow-yellow',
          imgTechnology: './Portfolio/svg/firebase.svg',
          title: 'Firebase',
        },
        {
          background: 'bg-orange-700',
          colorHover: 'hover:drop-shadow-orange',
          imgTechnology: './Portfolio/svg/figma.svg',
          title: 'Figma',
        },
        {
          background: 'bg-[#4CAB7B]',
          colorHover: 'hover:drop-shadow-darkgreen',
          imgTechnology: './Portfolio/svg/jetpackCompose.svg',
          title: 'Jetpack Compose',
        },
      ],
    },
  ];
}
