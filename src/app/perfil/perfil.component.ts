import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
