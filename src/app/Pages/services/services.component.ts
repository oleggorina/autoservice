import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardSliderComponent } from 'src/app/Components/card-slider/card-slider.component';
import { IServicesCard } from 'src/app/Shared/services-card.class';
import { SERVICESCARD_DATA } from 'src/app/Shared/services-card.const';
import { gsap } from 'gsap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {

  @ViewChild(CardSliderComponent) cardSlider!: CardSliderComponent;
  @ViewChild('sliderControlPrev') controlPrev!: ElementRef;
  @ViewChild('sliderControlNext') controlNext!: ElementRef;
  cardData: IServicesCard[] = SERVICESCARD_DATA;

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
      duration: 0.5,
      delay: 1.3,
      opacity: 0,
      x: 20
    });
  }

}
