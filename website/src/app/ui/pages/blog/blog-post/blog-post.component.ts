import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';
import { POSTS } from '../post-content';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  post: Post;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
