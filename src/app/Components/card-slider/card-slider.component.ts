import { AfterViewInit, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements AfterViewInit {
  @Input() data: any = '';
  @Input() template!: TemplateRef<any>;
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  containerWidth: number = 0;
  cardStyle: any = 0;
  cardMargin: any = 0;
  cardCount: any = 0;
  cardsPerSlide: number = 4;
  offset: number = 0;
  maxX: number = 0;
  width: number = 0;

  constructor(private renderer: Renderer2){}

  ngAfterViewInit(): void {
    this.sliderInit();
  }

  sliderInit(): void {
    this.containerWidth = this.cardsContainer.nativeElement.offsetWidth;
    this.cardStyle = this.cardsContainer.nativeElement.currentStyle || window.getComputedStyle(this.cardsContainer.nativeElement);
    this.cardMargin = Number(this.cardStyle.gap.match(/\d+/g)[0]);
    this.cardCount = this.data.length;
    const x = Math.ceil(this.cardCount / this.cardsPerSlide);
    this.maxX = -(x * this.containerWidth + (this.cardMargin * (this.cardCount / this.cardsPerSlide)) - this.containerWidth - this.cardMargin);

  }

  setCardsPerSlide(): void {
    this.width = window.innerWidth;
    if (this.width < 992) {
      this.cardsPerSlide = 2;
    } if (this.width < 768) {
      this.cardsPerSlide = 1;
    }
  }

  next(): void {
    if (this.offset != this.maxX) {
      this.offset -= this.containerWidth + this.cardMargin;
      this.renderer.setStyle(this.cardsContainer.nativeElement, 'transform', `translateX(${this.offset}px)`);
    }
  }

  prev (): void {
    if (this.offset != 0) {
      this.offset += this.containerWidth + this.cardMargin;
      this.renderer.setStyle(this.cardsContainer.nativeElement, 'transform', `translateX(${this.offset}px)`);
    }
  }
}
