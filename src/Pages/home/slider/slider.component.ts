import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://m.media-amazon.com/images/I/61tbfN6oPDL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/618wiP7xJZL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/81k6MOGScxL._SX3000_.jpg'
  ];
  currentIndex: number = 0;
  transform: string = 'translateX(0%)';
  intervalId: any;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3500);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
