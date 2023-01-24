import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent {
  @Input() cardTitle: string = '';
  @Input() cardImage: string = '';
  @Input() cardText: string = '';
}
