import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe',
  standalone:true
})
export class UppercasePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
