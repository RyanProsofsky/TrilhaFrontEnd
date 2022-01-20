import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoCnpj'
})
export class CodigoCnpjPipe implements PipeTransform {

  transform(value: string,): string {
    return value.substring(0, 2)   +   '   .  '   +   value.substring(2, 5)  +   '   .  '   +   value.substring(5, 8) +  '/'  +  value.substring(8, 9 ) + value.substring(19) +  value.substring(0, 2) + ' - ' + value.substring(2, 4) ;
  }

}
