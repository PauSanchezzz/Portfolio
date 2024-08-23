import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [],
  templateUrl: './rol.component.html',
  //styleUrls: ['./rol.component.css'],
  styles: `.animated-text {
  font-size: 48px;
  font-weight: 600;
}

.animated-text span {
  position: relative;
}

.animated-text span::before {
  content: "Frontend Developer";
  color: #ddcbfc;
  animation: words 20s infinite;
}

.animated-text span::after {
  content: "";
  position: absolute;
  width: calc(100% + 8px);
  height: 100%;
  background-color: #4a2173;
  border-left: 2px solid #ddcbfc;
  right: -8px;
  animation: cursor 0.8s infinite, typing 20s steps(14) infinite;
}

@media (max-width: 736px) {
  .animated-text {
    font-size: 27px;
  }
  .animated-text span::after {
    height: 110%;
  }
}

@keyframes cursor {
  to {
    border-left: 2px solid #ff7f5000;
  }
}

@keyframes words {
  0%,
  20% {
    content: "Frontend Developer";
  }
  21%,
  40% {
    content: "Backend Developer";
  }
  41%,
  60% {
    content: "Diseñadora UI/UX";
  }
  61%,
  80% {
    content: "Analista de Datos";
  }
  81%,
  100% {
    content: "Android Developer";
  }
}

@keyframes typing {
  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90%,
  95% {
    width: 0;
  }
  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100% + 8px);
  }
}
`,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RolComponent {}
