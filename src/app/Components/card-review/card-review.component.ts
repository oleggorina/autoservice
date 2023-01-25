import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent {
  @Input() cardName: string = '';
  @Input() cardImage: string = '';
  @Input() cardModel: string = '';
  @Input() cardText: string = '';
}
