import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';

@Injectable( {
  providedIn: 'root'
} )
export class CommentGuard implements Resolve<any> {
  constructor ( private service: CommentService ) { }
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    let response;
    return this.service.fetchComment();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
