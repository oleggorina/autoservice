import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header', {static: true}) header!: ElementRef<HTMLDivElement>;
  windowWidth: any = 0;

  ngOnInit(): void {
    this.navAnimation();
  }

  navAnimation(): void {
    gsap.from(this.header.nativeElement.children, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.5
    })
  }

  @HostListener('window: resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

}
