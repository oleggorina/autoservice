import { Component, ViewChild } from '@angular/core';
import { CardSliderComponent } from 'src/app/Components/card-slider/card-slider.component';
import { IServicesCard } from 'src/app/Shared/services-card.class';
import { SERVICESCARD_DATA } from 'src/app/Shared/services-card.const';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  @ViewChild(CardSliderComponent) cardSlider!: CardSliderComponent;
  cardData: IServicesCard[] = SERVICESCARD_DATA;

  next(): void {
    this.cardSlider.next();
  }

  prev(): void {
    this.cardSlider.prev();
  }

}
