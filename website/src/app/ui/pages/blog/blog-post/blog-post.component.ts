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
    // find name of current page
    const currentPage = this.findCurrentPage();

    // filter POSTS by current page to select post to display
    this.post = POSTS.filter(
      function(currentPost) {return currentPost.id == currentPage}
    )[0];
  }

  /**
   * Find name of current page
   * @return {string}
   */
  findCurrentPage() {
    const currentURL = this.router.url.split('/');
    const currentPage = currentURL[currentURL.length - 1];
    return currentPage;
  }

}
