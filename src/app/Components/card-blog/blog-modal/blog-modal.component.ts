import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent {
  images: string[] = [this.data.mainImage, this.data.firstImage, this.data.secondImage, 
                      this.data.thirdImage, this.data.fourthImage, this.data.fifthImage];
  currentIndex: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  getCurrentSlide(): string {
    return `${this.images[this.currentIndex]}`;
  }
  
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
