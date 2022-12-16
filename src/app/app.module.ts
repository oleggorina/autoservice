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
import { GeneralFormComponent } from './Components/Form/general-form/general-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SignFormComponent } from './Header/Components/sign-up/Components/sign-form/sign-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginFormComponent } from './Header/Components/login/Components/login-form/login-form.component';
import { ContactsComponent } from './Pages/contacts/contacts.component';
import { HomeComponent } from './Pages/home/home.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { ReviewsComponent } from './Pages/reviews/reviews.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ServicesComponent } from './Pages/services/services.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SignUpComponent,
    LoginComponent,
    ContactComponent,
    SocialComponent,
    NavbarComponent,
    GeneralFormComponent,
    SignFormComponent,
    LoginFormComponent,
    ContactsComponent,
    HomeComponent,
    GalleryComponent,
    ReviewsComponent,
    BlogComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
