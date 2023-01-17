import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  listMenu: any[] = [
    { title: 'Contato', link: '/contato' },
    { title: 'Acomodações', link: '/acomodacao' },
    { title: 'Localização', link: '/localizacao' },
    { title: 'Passeios', link: '/passeios' },
    { title: 'Sobre Nós', link: '/sobre-nos' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
