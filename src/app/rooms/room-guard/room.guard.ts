import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/guards/login.service';

@Injectable( {
  providedIn: 'root'
} )
export class RoomGuard implements CanActivate, CanActivateChild {
  constructor ( private loginService: LoginService, ) {

  }
  canActivateChild( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error( 'Method not implemented.' );
    return this.loginService.isLoogedIn;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLoogedIn;
  }
}
