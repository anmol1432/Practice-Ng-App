import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component( {
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: [ './rooms-booking.component.scss' ]
} )
export class RoomsBookingComponent implements OnInit {

  id$: Observable<number> = this.route.params.pipe( map( ( params ) => params[ 'roomid' ] ) );
  constructor ( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe( ( res ) => {
      // console.log( "route", res );
    } );
  }

}
