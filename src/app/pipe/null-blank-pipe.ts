import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullBlank'
})
export class NullBlankPipe implements PipeTransform {

  transform(value: unknown, textToDisplay: string): unknown {
    
    console.log('transform')
    //return value.fname +" " +  value.mname + ' '+ value.lanme for fuul;
     if(value == '' || value == null || value == undefined ) {
      return  textToDisplay;
    } else {
      return value;
    }
  }

}
