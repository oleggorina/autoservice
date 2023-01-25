import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardSliderComponent } from 'src/app/Components/card-slider/card-slider.component';
import { gsap } from 'gsap';
import { IReviewsCard } from 'src/app/Shared/reviews-card.class';
import { REVIEWSCARD_DATA } from 'src/app/Shared/reviews-card.const';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements AfterViewInit {
  
  @ViewChild(CardSliderComponent) cardSlider!: CardSliderComponent;
  @ViewChild('sliderControlPrev') controlPrev!: ElementRef;
  @ViewChild('sliderControlNext') controlNext!: ElementRef;
  cardData: IReviewsCard[] = REVIEWSCARD_DATA;

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
