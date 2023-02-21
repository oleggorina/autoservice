import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import { IGallery } from 'src/app/Shared/gallery.class';
import { GALLERY_DATA } from 'src/app/Shared/gallery.const';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  images: IGallery[] = GALLERY_DATA;

  @ViewChild('slider')
  slider!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderContainer')
  sliderContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderItem')
  sliderItem!: QueryList<ElementRef>;

  activeOrder: number = 0;
  width: number = 0;

  constructor(private renderer: Renderer2){}

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  ngAfterViewInit(): void {
    
  }
}
