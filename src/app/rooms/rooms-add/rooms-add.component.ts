import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component( {
  selector: 'hinv-rooms-add', 
  templateUrl: './rooms-add.component.html',
  styleUrls: [ './rooms-add.component.scss' ]
} )
export class RoomsAddComponent implements OnInit {

  rooms: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 4,
  };
  show = false;
  constructor ( private roomsService: RoomsService ) { }

  ngOnInit(): void {
  }
  handleSubmit( event: any,roomsForm:NgForm ) {
    this.roomsService.addRoom( this.rooms ).subscribe( ( res ) => {
      // console.log( "res =>", res )
      this.show = !this.show;
      roomsForm.resetForm()
      setTimeout( () => this.show = false, 4000 )
    } )
    
    // console.log( "event", event.target['Amenities'].value  );
  }
}
