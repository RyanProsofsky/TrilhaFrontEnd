import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoCpf'
})
export class CodigoCpfPipe implements PipeTransform {

  transform(value: string,): string {
    return value.substring(0,   3)   +   '   .   '  +   value.substring(3,  6)   +   '   .  '   +   value.substring(6, 9) +  ' - '  +  value.substring(19,  ) + value.substring(0, 1);
  }

}
