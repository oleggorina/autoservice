import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    {path: 'home', label: 'Home'},
    {path: 'services', label: 'Services'},
    {path: 'gallery', label: 'Gallery'},
    {path: 'reviews', label: 'Reviews'},
    {path: 'blog', label: 'Blog'},
    {path: 'contacts', label: 'Contacts'}
  ];
  activeLink = this.links[0];
  windowWidth: any = window.innerWidth;

  @ViewChild('navbar', {static: true}) navbar!: ElementRef<HTMLCollection>;
  
  constructor() {
  }
  
  ngOnInit(): void {
    this.navbarAnimation();
  }
  
  navbarAnimation(): void {
    gsap.from(this.navbar.nativeElement, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.5
    });
  }

  @HostListener('window: resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
