import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  historyInfo = {
    title: 'Tour Virtual 360º',
    description: 'Uma descrição sobre o que é o tour virtual aqui',
    image: 'assets/images/nossa-historia.png'
  };

  secondSectionList: any[] = [
    { class: 'card__descricao card__descricao-conhecer', title: 'Lazer', subTitle: 'Piscina', description: 'Nada como uma bela piscina no calor, né?!', horarioUso: '8h às 19h', diasUso: 'de terça à domingo', imageClock: 'assets/images/clock.png', image: 'assets/images/piscina.png' },
    { class: 'card__descricao-churrasqueira', title: 'Lazer', subTitle: 'Churrasqueira', description: 'Um ótimo espaço aberto para curtir um churrasco com a família reunida!', horarioUso: '10h às 23h', diasUso: 'de terça à domingo', imageClock: 'assets/images/clock.png', image: 'assets/images/churrasqueira.png' },
    { class: 'card__descricao-cafe-manha', title: 'Incluso', subTitle: 'Café da Manhã', description: 'Venha se deliciar com um tradicional café mineiro, e claro, o pão de queijo nunca falta por aqui!', horarioUso: '7h às 10h', diasUso: 'de quinta à domingo', imageClock: 'assets/images/clock.png', image: 'assets/images/cafe.png' },
  ];

  stars = new Array(5);
  feedbackList: any[] = [
    { title: 'Hóspede', subTitle: 'Jane Santos', description: 'Estive esse final de semana nesse lugar maravilhoso... Um recanto pra descansar contato com a natureza. Tudo maravilhoso, o proprietário nos recebeu tão bem, a moça que faz o café é pura gentileza e o filho do proprietário também, com uma disponibilidade grande! Eu recomendo 100%! Votaremos com certeza!', image: 'assets/images/trip-advisor.png', },
    { title: 'Hóspede', subTitle: 'Márcio Emilio', description: 'Lugar tranquilo excelente chalés ótimos proprietários atenciosos café da manhã muito bom recomendo!', image: 'assets/images/trip-advisor.png', },
    { title: 'Hóspede', subTitle: 'Talita Meireles', description: 'Lugar super aconchegante, com café da manhã delicioso, tem parquinho para as crianças, tem piscina, rede, laguinho, muito bom mesmo, amei, recomendo e vou voltar.', image: 'assets/images/trip-advisor.png', },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
}
