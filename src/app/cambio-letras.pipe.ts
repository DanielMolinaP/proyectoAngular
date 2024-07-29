import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value
      .replace(/a/g, '4')
      .replace(/e/g, '3')
      .replace(/i/g, '1')
      .replace(/o/g, '0')
      .replace(/u/g, '9');
  }

}
