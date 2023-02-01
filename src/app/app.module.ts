import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { LogoComponent } from './Header/Components/logo/logo.component';
import { SignUpComponent } from './Header/Components/sign-up/sign-up.component';
import { LoginComponent } from './Header/Components/login/login.component';
import { ContactComponent } from './Header/Components/contact/contact.component';
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
import { ImageComponent } from './Pages/home/Components/image/image.component';
import { ScheduleComponent } from './Pages/home/Components/schedule/schedule.component';
import { SocialComponent } from './Components/social/social.component';
import { TitleComponent } from './Pages/home/Components/title/title.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CardSliderComponent } from './Components/card-slider/card-slider.component';
import { SliderControlComponent } from './Components/slider-control/slider-control.component';
import { CardComponent } from './Components/card/card.component';
import { CardReviewComponent } from './Components/card-review/card-review.component';
import { CardBlogComponent } from './Components/card-blog/card-blog.component';
import { BlogModalComponent } from './Components/card-blog/blog-modal/blog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SignUpComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    GeneralFormComponent,
    SignFormComponent,
    LoginFormComponent,
    ContactsComponent,
    HomeComponent,
    GalleryComponent,
    ReviewsComponent,
    BlogComponent,
    ServicesComponent,
    ImageComponent,
    ScheduleComponent,
    SocialComponent,
    TitleComponent,
    CardSliderComponent,
    SliderControlComponent,
    CardComponent,
    CardReviewComponent,
    CardBlogComponent,
    BlogModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
