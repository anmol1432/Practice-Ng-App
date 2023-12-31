import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

constructor(private http : HttpClient) { }

  fetchComment() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
