import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomGuard } from './room-guard/room.guard';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild: [ RoomGuard],
    children: [
      { path: 'list', component: RoomsListComponent },
      // { path: ':roomid', component: RoomsBookingComponent },
      { path: '**', component: RoomsAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
