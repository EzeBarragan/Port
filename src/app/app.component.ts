import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto_x';
  @ViewChild('seccionInicio') secFotosuno: ElementRef | any;
  Instagram(){
    window.open('https://www.instagram.com/ezequielbsso?r=nametag');
  }
  Github(){
    window.open('https://github.com/');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/ezequiel-barragan-8463a51a6/');
  }
  Twitter(){
    window.open('https://twitter.com/ezee_bsso03');
  }
  scrollToSeis(){
      this.secFotosuno.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
    }
  }


