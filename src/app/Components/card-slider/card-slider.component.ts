import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements AfterViewInit {
  @Input() data: any = '';
  @Input() template!: TemplateRef<any>;
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  slideCount: any = 0;
  itemLeft: any = 0;
  inc: number = 0;
  containerWidth: any = 0;
  cardCount: any = 0;
  cardsPerSlide: number = 4;
  offset: number = 0;
  width: number = 0;

  constructor(private renderer: Renderer2){}
  
  ngAfterViewInit(): void {
    this.setCardsPerSlide();
    this.sliderInit();
    this.cardsAnimation();
  }

  sliderInit(): void {
    this.containerWidth = this.cardsContainer.nativeElement.offsetWidth;
    this.cardCount = this.data.length;
    this.itemLeft = this.cardCount % this.cardsPerSlide;
    this.slideCount = Math.floor(this.cardCount / this.cardsPerSlide) - 1;
  }

  setCardsPerSlide(): void {
    this.width = window.innerWidth;
    if (this.width < 1400 && this.width >= 1200) {
      this.cardsPerSlide = 3;
    } if (this.width < 1200 && this.width >= 768) {
      this.cardsPerSlide = 2;
    } if (this.width < 768) this.cardsPerSlide = 1;
  }

  next(): void {
    if (this.inc !== this.slideCount + this.itemLeft) {
      if (this.inc === this.slideCount) {
        this.inc = this.inc + this.itemLeft;
        this.offset = this.offset - (this.containerWidth / this.cardsPerSlide) * this.itemLeft;
      } else {
        this.inc ++;
        this.offset = this.offset - this.containerWidth;
      }
      this.renderer.setStyle(this.cardsContainer.nativeElement, 'transform', `translateX(${this.offset}px)`);
    }
  }

  prev (): void {
    if (this.inc !== 0) {
      if (this.inc === this.itemLeft) {
        this.inc = this.inc - this.itemLeft;
        this.offset = this.offset + (this.containerWidth / this.cardsPerSlide) * this.itemLeft;
      } else {
        this.inc --;
        this.offset = this.offset + this.containerWidth;
      }
      this.renderer.setStyle(this.cardsContainer.nativeElement, 'transform', `translateX(${this.offset}px)`);
    }
  }

  cardsAnimation(): void {
    gsap.from(this.cardsContainer.nativeElement.children, {
      duration: 0.3,
      opacity: 0,
      y: -20,
      stagger: 0.3
    });
  }
}
