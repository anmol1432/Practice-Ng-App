import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';

@Injectable( {
  providedIn: 'root',
} )
export class BookingGuard implements CanDeactivate<BookingComponent> {
  constructor ( private _snackBar: MatSnackBar ) { }

  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if ( component.boookingForm.pristine ) {
      console.log( "true" );
      return component.boookingForm.pristine;
    } else {
      console.log( "false" );
      this._snackBar.open( 'You have unsaved changes!', 'DISCARD' );
      return false;
    }
    // return !component.boookingForm.dirty;
  }

}
