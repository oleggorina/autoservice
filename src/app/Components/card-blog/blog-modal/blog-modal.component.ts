import { AfterContentInit, Component, Inject, Input, OnInit } from '@angular/core';
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
  
  next(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  prev(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex
  }
}
