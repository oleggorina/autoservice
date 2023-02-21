import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @ViewChild('window', {static: true}) window!: ElementRef<HTMLDivElement>;
  
  ngOnInit(): void {
    this.contactsAnimation();
    console.log(this.window)
  }

  contactsAnimation(): void {
    gsap.from(this.window.nativeElement, {
      y: -20,
      duration: 1
    })
  }
  
}
