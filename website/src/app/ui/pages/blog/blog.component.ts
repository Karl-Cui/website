import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { POSTS } from './post-content';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // global variable posts--use to list out and display all posts
  posts = POSTS;
  selectedPost: Post;

  constructor() {}

  ngOnInit() {}

  onSelect(post: Post): void {
     this.selectedPost = post;
  }

}
