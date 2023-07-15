import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export class CoustomValidator {

  static validateName( control: AbstractControl ) {
    const val = control.value as string;
    if ( val.includes( 'test' ) ) {
      return {
        invalidName: true
      };
    } else {
      return null;
    }
  }

  static validatSpecialChar( specialRegex: string ) {
    return function ( control: AbstractControl ) {
      const val = control.value as string;
      if ( val.includes( specialRegex ) ) {
        return {
          invalidName: true
        };
      } else {
        return null;
      }
    };
  }

  static validateDate( control: FormGroup ) {
    const checkDate :any  = new Date( control.get( 'checkinDate' )?.value) ;
    const checkOutDate:any = new Date( control.get( 'checkoutDate' )?.value ) ;
    const diffTime = checkOutDate - checkDate;
    const diffDays = Math.ceil( diffTime / ( 1000 * 60 * 60 * 24 ) )
    console.log(checkDate,checkOutDate,diffDays,diffTime )
    debugger
    if ( diffDays <= 0 ) {
      control.get( 'checkinDate' )?.setErrors( {
        invalidDate: true
      })
      return {
        invalidDate: true
     } 
    } else {
      return null;
    }
  }

}
