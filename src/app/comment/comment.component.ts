import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';

@Component( {
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: [ './comment.component.scss' ]
} )
export class CommentComponent implements OnInit {

  constructor ( private service: CommentService,
    private activatedRoute: ActivatedRoute ) { }

  comments?: Observable<any>;

  ngOnInit() {
    this.comments = this.activatedRoute.data.pipe( pluck( 'comments' ) );
  }

}
