import { AfterContentInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent {
  images: string[] = [this.data.firstImage, this.data.secondImage, this.data.thirdImage,
                this.data.fourthImage, this.data.fifthImage];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
