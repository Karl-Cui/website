import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './ui/pages/about/about.component';
import { BlogComponent } from './ui/pages/blog/blog.component';
import { ContactComponent } from './ui/pages/contact/contact.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { BlogPostComponent } from './ui/pages/blog-post/blog-post.component'

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'blog-post', component: BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
