import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss']
})
export class CardBlogComponent {
  @Input() cardTitle: string = '';
  @Input() cardImage: string = '';
  @Input() cardText: string = '';
}
