import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPerc'
})
export class GetPercPipe implements PipeTransform {

  transform(value: { actualLength: number, requiredLength: number } | null): number {
    return value ? (value.actualLength / value.requiredLength) * 100 : 0;
  }

}
