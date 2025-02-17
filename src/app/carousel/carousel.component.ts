import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: string[] = [
    '../assets/image/wedding.jpg',
    '../assets/image/wedding3.jpg',
    '../assets/image/wedding2.jpg'
  ];
  currentSlide = 0;
  slidesToShow = 1;
  dots: number[] = [];

  ngOnInit() {
    this.updateSlidesToShow();
    this.updateDots();
    window.addEventListener('resize', () => {
      this.updateSlidesToShow();
      this.updateDots();
    });
  }

  updateSlidesToShow() {
    this.slidesToShow = window.innerWidth >= 768 ? 3 : 1;
  }

  updateDots() {
    const numberOfDots = Math.ceil(this.images.length / this.slidesToShow);
    this.dots = Array(numberOfDots).fill(0);
  }

  nextSlide() {
    if (this.currentSlide < this.images.length - this.slidesToShow) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

}
