import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercasePipe',
  standalone:true
})
export class LowercasePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
