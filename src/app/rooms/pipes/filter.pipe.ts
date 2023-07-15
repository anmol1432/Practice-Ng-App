import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from '../rooms';

@Pipe( {
  name: 'filter'
} )
export class FilterPipe implements PipeTransform {

  transform( rooms: Array<RoomList>, price: number ): any {
    return rooms.filter( ( room ) => room.price <= price );
  }

}
