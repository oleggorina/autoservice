import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardSliderComponent } from 'src/app/Components/card-slider/card-slider.component';
import { IBlogCard } from 'src/app/Shared/blog-card.class';
import { BLOGCARD_DATA } from 'src/app/Shared/blog-card.const';
import { gsap } from 'gsap';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {
  @ViewChild(CardSliderComponent) cardSlider!: CardSliderComponent;
  @ViewChild('sliderControlPrev') controlPrev!: ElementRef;
  @ViewChild('sliderControlNext') controlNext!: ElementRef;
  cardData: IBlogCard[] = BLOGCARD_DATA;

  ngAfterViewInit(): void {
    this.prevAnimation();
    this.nextAnimation();
  }
  
  next(): void {
    this.cardSlider.next();
  }

  prev(): void {
    this.cardSlider.prev();
  }

  prevAnimation(): void {
    gsap.from(this.controlPrev.nativeElement, {
      duration: 0.5,
      delay: 1.3,
      opacity: 0,
      x: -20
    });
  }

  nextAnimation(): void {
    gsap.from(this.controlNext.nativeElement, {
      duration: 0.3,
      delay: 1.3,
      opacity: 0,
      x: 20
    });
  }
}
