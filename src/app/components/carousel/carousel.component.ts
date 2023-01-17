import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  @ViewChild('swiper2', { static: false }) swiper2!: SwiperComponent;
  config: any = {};
  configFeedback: any = {};
  loveCounter = 189;

  bannerCarouselList: string[] = ['assets/images/banner_01.png', 'assets/images/banner_02.png', 'assets/images/banner_03.png'];

  historyInfo = {
    title: 'Soledade de Minas',
    subTitle: 'Doce Recanto',
    description: 'A Pousada Doce Recanto é mais do que apenas uma propriedade localizada na cidade de Soledade de Minas. É um lugar onde a natureza exuberante se une à história e à herança de uma família. A propriedade, passada de geração em geração, herdada do Sr. Justo Maciel, o patriarca da família, é cercada por uma fauna e flora rica e abundante. Os hóspedes podem desfrutar de passeios ao bosque, onde é possível apreciar a diversidade de espécies de plantas e animais, além de um passeio no apiário, onde os hóspedes podem conhecer o mundo das abelhas e seus produtos. Para os amantes de cavalos, a pousada oferece também passeios a cavalo, onde é possível explorar a bela paisagem da propriedade. A Pousada Doce Recanto é o lugar perfeito para aqueles que buscam tranquilidade, contato com a natureza e uma ligação com a história e a herança de uma família. E para aqueles que desejam conhecer as principais estâncias hidrominerais, São Lourenço e Caxambú.',
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
    this.config = {
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      slidesPerView: 1
    }

    this.configFeedback = {
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      slidesPerView: 1
    }

    setTimeout(() => {
      // Start autoplay
      this.swiper.swiperRef.fadeEffect = true;
      this.swiper.swiperRef.autoplay.start();

      this.swiper2.swiperRef.fadeEffect = true;
      this.swiper2.swiperRef.autoplay.start();
    }, 1000);
  }

  loveClick(event: Event): void {
    const blackHeart = 'assets/images/heart-black.png';
    const redHeart = 'assets/images/heart-red.png';

    if ((<HTMLImageElement>event.target).src.includes('black')) {
      (<HTMLImageElement>event.target).src = (<HTMLImageElement>event.target).src.replace(blackHeart, redHeart)
      this.loveCounter++;
    } else {
      (<HTMLImageElement>event.target).src = (<HTMLImageElement>event.target).src.replace(redHeart, blackHeart)
      this.loveCounter--;
    }
  }

  onSlideChange() {
    setTimeout(() => {
      if (this.swiper.swiperRef.autoplay) {
        this.swiper.swiperRef.fadeEffect = true;
        this.swiper.swiperRef.autoplay.start();
      }
      if (this.swiper2.swiperRef.autoplay) {
        this.swiper2.swiperRef.fadeEffect = true;
        this.swiper2.swiperRef.autoplay.start();
      }
    }, 1000);
  }

}
