import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { RouterModule } from '@angular/router';
import { CommentService } from './comment.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentGuard } from './guard/comment.guard';

@NgModule( {
  declarations: [ CommentComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild( [
      {
        path: '',
        component: CommentComponent,
        resolve:{comments:CommentGuard}
      }
    ] )
  ],
  providers: [
    {
      provide: CommentService,
      useClass: CommentService
    }
  ],
  exports: [ RouterModule ]
} )
export class CommentModule { }
