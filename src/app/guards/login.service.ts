import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';

@Injectable( {
  providedIn: 'root'
} )
export class LoginService {

  isLoogedIn: boolean = false;
  constructor () { }

  log( email: string, password: string ) {
    if ( email == "anmol.singh2@kochartech.com" && password == '123456789' ) {
      this.isLoogedIn = true;
    }
  }
}
