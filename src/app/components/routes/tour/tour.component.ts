import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.less']
})
export class TourComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper2', { static: false }) swiper2!: SwiperComponent;
  configFeedback: any = {};
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
    { title: 'Cama de Casal' },
    { title: 'Cama de Solteiro' },
    { title: 'Frigobar' },
    { title: 'TV' },
    { title: 'Cooktop' },
  ];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('accomodation-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }

  ngAfterViewInit(): void {

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
      this.swiper2.swiperRef.fadeEffect = true;
      this.swiper2.swiperRef.autoplay.start();
    }, 1000);
  }

  onSlideChange() {
    setTimeout(() => {
      if (this.swiper2.swiperRef.autoplay) {
        this.swiper2.swiperRef.fadeEffect = true;
        this.swiper2.swiperRef.autoplay.start();
      }
    }, 1000);
  }
}
