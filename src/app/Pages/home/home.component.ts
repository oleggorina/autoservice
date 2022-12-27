import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('image', {static: true}) image!: ElementRef<HTMLDivElement>;
  @ViewChild('social1', {static: true}) social1!: ElementRef<HTMLDivElement>;
  @ViewChild('social2', {static: true}) social2!: ElementRef<HTMLDivElement>;
  @ViewChild('social3', {static: true}) social3!: ElementRef<HTMLDivElement>;
  @ViewChild('schedule', {static: true}) schedule!: ElementRef<HTMLDivElement>;

  windowWidth: any = 0;
  socialSize: number = 80;

  ngOnInit(): void {
    this.homeAnimation();
  }

  @HostListener('window: resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  homeAnimation(): void {
    if (this.windowWidth < 576) this.socialSize = 40;
    gsap.from(this.image.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: 50,
      delay: 4.7
    });
    gsap.from(this.social1.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: this.socialSize,
      delay: 4.7
    });
    gsap.from(this.social2.nativeElement, {
      duration: 1.5,
      opacity: 0,
      delay: 4.3
    })
    gsap.from(this.social3.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: -this.socialSize,
      delay: 4.7
    });
    gsap.from(this.schedule.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: -20,
      delay: 4.7
    });
  }
}
