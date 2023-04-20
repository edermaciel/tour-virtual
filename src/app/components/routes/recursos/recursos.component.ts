import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.less']
})
export class RecursosComponent implements OnInit {
  listItems: any[] = [
    {
      title: "Alcance e Visibilidade",
      content: "Você aumentará seu alcance devido a tal e tal coisa",
      image: 'assets/images/topics/topic-2.png'
    },
    {
      title: 'Redução de Custos',
      content: 'Você irá reduzir custos devido a tal e tal coisa',
      image: 'assets/images/topics/topic-2.png'
    },
    {
      title: 'Confiança e Credibilidade',
      content: 'Você irá aumentar a credibilidade devido a tal e tal coisa',
      image: 'assets/images/topics/topic-3.png'
    },
    {
      title: 'Experiência do Cliente',
      content: 'Você irá melhorar a experiência do cliente devido a tal e tal coisa',
      image: 'assets/images/topics/topic-4.png'
    },
    {
      title: 'Acesso a qualquer momento',
      content: 'Além de tudo, você poderá ter acesso a qualquer momento!',
      image: 'assets/images/topics/topic-5.png'
    },
    {
      title: 'Diferencial Competitivo',
      content: 'Você terá um diferencial perante aos concorrentes devido a tal e tal coisa',
      image: 'assets/images/topics/topic-6.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('tours-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }

}
