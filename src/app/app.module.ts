import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { LogoComponent } from './Header/Components/logo/logo.component';
import { SignUpComponent } from './Header/Components/sign-up/sign-up.component';
import { LoginComponent } from './Header/Components/login/login.component';
import { ContactComponent } from './Header/Components/contact/contact.component';
import { SocialComponent } from './Header/Components/social/social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './Navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SignUpComponent,
    LoginComponent,
    ContactComponent,
    SocialComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
