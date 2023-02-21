import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { IGallery } from 'src/app/Shared/gallery.class';
import { GALLERY_DATA } from 'src/app/Shared/gallery.const';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterContentInit {
  images: IGallery[] = GALLERY_DATA;

  @ViewChild('slider')
  slider!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderContainer')
  sliderContainer!: ElementRef<HTMLDivElement>;
  @ViewChildren('sliderItems')
  sliderItems!: QueryList<ElementRef>;

  activeOrder: number = 0;
  width: number = 0;

  constructor(private renderer: Renderer2){}

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  ngAfterContentInit(): void {
    this.initSlider();
  }

  initSlider(): void {
    this.activeOrder = Math.floor(this.sliderItems.length / 2);
    console.log(this.activeOrder)
    this.updateSlider();
  }

  updateSlider(): void {
    const {width, height} = this.sliderContainer.nativeElement.getBoundingClientRect();
    const a = width / 2;
    const b = height / 2;
    const delta = Math.PI / this.sliderItems.length / 4;
    for (let i = 0; i < this.sliderItems.length; i ++) {
      const leftSide = this.renderer.selectRootElement(`[data-id="${this.activeOrder - i}"]`);
      // const leftSide = document.querySelector(`.slider__item[data-order="${this.activeOrder - i}"]`);
      if (leftSide) {
        this.renderer.setStyle(leftSide, 'left', `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`);
        this.renderer.setStyle(leftSide, 'top', `${-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)}px`);
        this.renderer.setStyle(leftSide, 'zIndex', `${this.sliderItems.length - 1}`);
        this.renderer.setStyle(leftSide, 'opacity', `${1 - (2 * i) / this.sliderItems.length}`);
      }
    }
  }
}
