import { AfterContentInit, AfterViewInit, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogModalComponent } from './blog-modal/blog-modal.component';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss']
})
export class CardBlogComponent implements AfterContentInit {
  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  @Input() cardImage: string = '';
  @Input() cardText: string = '';
  @Input() cardDate: string = '';
  @Input() firstImage: string = '';
  @Input() secondImage: string = '';
  @Input() thirdImage: string = '';
  @Input() fourthImage: string = '';
  @Input() fifthImage: string = '';
  displayText: string = '';

  constructor(private matDialog: MatDialog)  {
  }

  ngAfterContentInit(): void {
    this.displayText = this.cardText.substring(0, 170) + '...';
  }

  openModal(): void {
    this.matDialog.open(BlogModalComponent, {
      disableClose: true,
      data: {title: this.cardTitle, subtitle: this.cardSubtitle, mainImage: this.cardImage,
        text: this.cardText, firstImage: this.firstImage, secondImage: this.secondImage,
        thirdImage: this.thirdImage, fourthImage: this.fourthImage, fifthImage: this.fifthImage}
    })
  }
}
