import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './navigation/notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'rooms',
    // canActivate: [ LoginGuard ],
    // canLoad: [ LoginGuard ],
    loadChildren: () =>
      import( './rooms/rooms.module' ).then( ( m ) => m.RoomsModule )
  },
  {
    path: 'booking/:roomId',
    // canActivate: [ LoginGuard ],
    // canLoad: [ LoginGuard ],
    loadChildren: () => import( './booking/booking.module' ).then( m => m.BookingModule )
  },
  {
    path: 'comments',
    // canActivate: [ LoginGuard ],
    // canLoad: [ LoginGuard ],
    loadChildren: () => import( './comment/comment.module' ).then( m => m.CommentModule )
  },
  {
    path: 'employes',
    canActivate: [ LoginGuard ],
    component: EmployeeComponent
  },
  { path: 'login', component: LoginComponent },
  {
    path: '404',
    component: NotfoundComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],

} )
export class AppRoutingModule { }
