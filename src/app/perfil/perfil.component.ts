import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  @Input() referenciaSeccion6: any;
  scrollToSeis() {
    this.referenciaSeccion6.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  Instagram(){
    window.open('https://www.instagram.com/ezequielbsso?r=nametag');
  }
  Github(){
    window.open('https://github.com/EzeBarragan');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/ezequiel-barragan-8463a51a6/');
  }
  Twitter(){
    window.open('https://twitter.com/ezee_bsso03');
  }
  curriculum(){
    window.open('https://drive.google.com/file/d/1R8g_Q1f06JyACipk6W38mYYXoBYGIBEq/view?usp=sharing');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
