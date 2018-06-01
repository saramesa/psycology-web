import { Component } from '@angular/core';
import { SwiperModule } from 'angular2-useful-swiper';

@Component( {
  selector: 'home',
  templateUrl: './home.component.html',
} )

export class homeComponent {
  images = [
      '../assets/images/playstonessmall.jpg',
      '../assets/images/thomas_playing.jpg',
      '../assets/images/playing_child.jpg'
    ];
  home = 'Home';
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
  };

  constructor() {
    console.log('this ', this);
    this.images = [
      '../assets/images/playstonessmall.jpg',
      '../assets/images/thomas_playing.jpg',
      '../assets/images/playing_child.jpg'
    ]
  }
}
