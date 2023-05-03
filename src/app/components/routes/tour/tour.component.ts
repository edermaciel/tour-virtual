import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.less']
})
export class TourComponent implements OnInit {
  stars = new Array(5);
  roomList: any[] = [
    { image: 'assets/images/accomodation/quarto-1.jpeg' },
    { image: 'assets/images/accomodation/quarto-2.jpeg' },
    { image: 'assets/images/accomodation/quarto-3.jpeg' },
    { image: 'assets/images/accomodation/quarto-4.jpeg' },
    { image: 'assets/images/accomodation/quarto-5.jpeg' },
    { image: 'assets/images/accomodation/quarto-6.jpeg' },
    { image: 'assets/images/accomodation/quarto-7.jpeg' },
    { image: 'assets/images/accomodation/quarto-8.jpeg' },
    { image: 'assets/images/accomodation/quarto-9.jpeg' },
  ];

  includedList: any[] = [
    { title: 'Imersão' },
    { title: 'Compreensão' },
    { title: 'Interatividade' },
    { title: 'Conveniência' },
    { title: 'Aprendizado' },
  ];

  contactObj = {
    subtitle: 'Immersive',
    description: `A ferramenta IMMERSIVE, permite que você se mova por um determinado local como se estivesse realmente lá, proporcionando uma experiência única e 
                  interativa que pode ser incrivelmente útil para uma variedade de propósitos.
                  Isso pode ser especialmente útil se você estiver tentando navegar em uma área desconhecida ou quiser ter uma ideia melhor do que
                  um local específico parece antes de chegar lá.
                  Em geral, o IMMERSIVE é uma ferramenta poderosa e versátil que pode ser usada em uma variedade de contextos.
                  Com seus recursos imersivos e interativos, permite explorar o mundo ao seu redor de maneiras novas e emocionantes 
                  e pode ser um recurso incrivelmente útil para fins pessoais e profissionais.`,
  }

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('accomodation-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }
}
