import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover/hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';


@NgModule( {
  declarations: [
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ HoverDirective, EmailvalidatorDirective ]
} )
export class DirectivesModule { }
