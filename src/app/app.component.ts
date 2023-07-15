import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
// import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ConfigService } from './services/config.service';
import { RouteConfigToken } from './services/routeConfig.service';
@Component( {
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template!</h1>
  // <p>Angular is Awesome</p>
  // `,
  styleUrls: [ './app.component.scss' ],
  // styles: [`h1 { color: red; }`]
} )
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild( 'name', { static: true } ) name!: ElementRef;

  constructor (
    @Optional() private loggerService: LoggerService,
    @Inject( localStorageToken ) private localStorage: any,
    // private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    // this.router.events.subscribe( {
    //   next: ( value ) => {
    //     console.log( "app router event", value );
    //   },
    //   error: ( error ) => {
    //     console.log( error );
    //   }
    // } );
    this.router.events
      .pipe( filter( ( event ) => event instanceof NavigationStart ) )
      .subscribe( {
        next: ( value: any ) => {
          
          // console.log( "app router event", value );
        },
        error: ( error: any ) => {
          // console.log( error );
        }
      } );
    // console.log( "configService", configService );
  }

  ngOnInit() {
    // this.router.events.subscribe( ( res: any ) => {
    //   console.log( "res", res );
    // } );
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
