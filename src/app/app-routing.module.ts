import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Pages/blog/blog.component';
import { ContactsComponent } from './Pages/contacts/contacts.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { ReviewsComponent } from './Pages/reviews/reviews.component';
import { ServicesComponent } from './Pages/services/services.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
