import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor (
    private loginService: LoginService,
  private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.loginService.isLoggedIn? true: this.router.navigate(['/login']);
    // alert( this.loginService.isLoogedIn )
   return this.loginService.isLoogedIn
    // return true
  }
  canLoad(
    route: Route,
    segments: UrlSegment[] ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // alert( this.loginService.isLoogedIn )
    return this.loginService.isLoogedIn;
    // return true
  }
}

