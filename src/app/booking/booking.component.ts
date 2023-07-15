import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking-service.service';
import { mergeMap, switchMap } from 'rxjs';
import { CoustomValidator } from './validators/CoustomValidator.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component( {
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: [ './booking.component.scss' ]
} )
export class BookingComponent implements OnInit {

  boookingForm!: FormGroup;
  get guests() {
    return this.boookingForm.get( 'guests' ) as FormArray;
  }

  constructor ( private configService: ConfigService,
    private fb: FormBuilder,
    private route : ActivatedRoute,
    private bookingService: BookingService,
    // @Inject( MAT_DIALOG_DATA ) public data: any,
    // readonly snackBar: MatSnackBar,
     @Inject('AnmolToken') private anmol: string) { }

  ngOnInit(): void {
   const roomId = this.route.snapshot.paramMap.get('roomId')

    this.boookingForm = this.fb.group( {
      roomId: new FormControl( { value: roomId, disabled: true }, { validators: [ Validators.required ] } ),
      guestEmail: [ this.anmol,  [ Validators.required, Validators.email ] ],
      checkoutDate: [ '' ],
      checkinDate: [ '' ],
      bookingStatus: [ '' ],
      bookingAmount: [ '' ],
      bookingDate: [ '' ],
      mobileNumber: [ '' ],
      guestName: [ "", [ Validators.required,
      Validators.minLength( 5 ),
      CoustomValidator.validateName,
      CoustomValidator.validatSpecialChar( '@' ) ] ],
      address: this.fb.group( {
        addressLine1: [ '' ],
        addressLine2: [ '' ],
        city: [ '' ],
        state: [ '' ],
        country: [ '' ],
        zipCode: [ '' ],
      } ),
      guests: this.fb.array( [
        this.fb.group( { guestName: [ '', [ Validators.required ] ], age: new FormControl( '', [ Validators.required ] ) } )
      ] ),
      tnc: [ '' ]
    }, {
      updateOn: 'blur',
      validators: [ CoustomValidator.validateDate ]
    } );

    // console.log( "===>", this.guests );
    this.boookingForm.valueChanges.pipe( switchMap( ( data ) => {
      return this.bookingService.bookinRoom( data );
    } ) ).subscribe( ( res: any ) => res );
  };


  addingForm() {
    debugger;
    // this.boookingForm.get( 'guests' )?.controls[0]?.hasError( 'required' );
    // console.log( this.boookingForm.getRawValue() );
  }

  addGuest() {
    this.guests.push( this.fb.group( { guestName: [ '', [ Validators.required ] ], age: new FormControl( '', [ Validators.required ] ) } ) );
  }

  addPassport() {
    this.boookingForm.addControl( 'passport', new FormControl( '' ) );
  }

  deletePassport() {
    if ( this.boookingForm.get( 'passport' ) ) {
      this.boookingForm.removeControl( 'passport' );
    }
  }

  deleteGuest( _event: any ) {
    // console.log( _event, this.guests.at( _event ) );
    if ( this.guests.at( _event ) ) {
      this.guests.removeAt( _event );
    }
  }

  submit() {
    this.boookingForm.reset( {
      roomId: "",
      guestEmail: "",
      checkoutDate: "",
      checkinDate: "",
      bookingStatus: "",
      bookingAmount: "",
      bookingDate: "",
      mobileNumber: "",
      guestName: "",
      address: this.fb.group( {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      } ),
      guests: [],
      tnc: []
    } );
  }

  getBookingData() {
    // console.log( this.boookingForm.getRawValue() );
    this.boookingForm.patchValue( {
      roomId: "1",
      guestEmail: "anmol@gmail.com",
      checkoutDate: new Date()
    } );

  }

  // open( message: string, action = '', config?: MatSnackBarConfig ) {
  //   return this.snackBar.open( message, action, config );
  // // }
}
export class Booking {
  roomId!: string;
  guestEmail!: string;
  checkoutDate!: Date;
  checkinDate!: string;
  bookingStatus!: string;
  bookingAmount!: string;
  bookingDate!: string;
  mobileNumber!: string;
  guestName!: string;
  address!: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  guests!: [];
  tnc: false | undefined;
};

