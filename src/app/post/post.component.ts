import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts!: any[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
