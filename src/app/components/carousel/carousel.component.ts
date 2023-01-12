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

    console.log((<HTMLImageElement>event.target).src);
  }

  onSlideChange() {
    setTimeout(() => {
      this.swiper.swiperRef.fadeEffect = true;
      this.swiper.swiperRef.autoplay.start();

      this.swiper2.swiperRef.fadeEffect = true;
      this.swiper2.swiperRef.autoplay.start();
    }, 1000);
  }

}
