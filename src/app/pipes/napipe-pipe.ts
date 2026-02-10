import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'napipe',
  standalone:true
})
export class NapipePipe implements PipeTransform {

  transform(value:string  | number): string {
    // debugger;
    if(value === '' || value === undefined || value === null){
      return "NA";
    }else{
      return String(value);
    }
  }

}
