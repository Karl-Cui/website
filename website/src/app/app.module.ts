import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { AboutComponent } from './ui/pages/about/about.component';
import { BlogComponent } from './ui/pages/blog/blog.component';
import { ContactComponent } from './ui/pages/contact/contact.component';
import { BlogPostComponent } from './ui/pages/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
