import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArr'
})
export class FilterArrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
