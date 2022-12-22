import { Component } from '@angular/core';
import { HomeComponent } from 'src/app/Pages/home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links = [
    {path: 'home', label: 'Home'},
    {path: 'services', label: 'Services'},
    {path: 'gallery', label: 'Gallery'},
    {path: 'reviews', label: 'Reviews'},
    {path: 'blog', label: 'Blog'},
    {path: 'contacts', label: 'Contacts'}
  ];
  activeLink = this.links[0];
}
