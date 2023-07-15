import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../guards/login.service';

@Component( {
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor ( private route: Router, private loginService: LoginService, ) { }

  ngOnInit(): void {
  }

  login() {
    if ( this.email == "anmol.singh2@kochartech.com" && this.password == '123456789' ) {
      this.loginService.log( this.email, this.password );
      this.route.navigateByUrl( 'rooms/add' );
    }
  }

}