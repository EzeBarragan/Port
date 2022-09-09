import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() referenciaSeccion: any;
  @Input() referenciaSeccion2: any;
  @Input() referenciaSeccion3: any;
  @Input() referenciaSeccion4: any;
  @Input() referenciaSeccion5: any;
  constructor() { }

  ngOnInit(): void {
  }
  scrollToUno() {
    this.referenciaSeccion.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollToDos() {
    this.referenciaSeccion2.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollToTres() {
    this.referenciaSeccion3.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }scrollToCuatro() {
    this.referenciaSeccion4.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }scrollToCinco() {
    this.referenciaSeccion5.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
}

