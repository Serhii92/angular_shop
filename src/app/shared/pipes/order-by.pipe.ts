import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, field: string, direction: boolean): any[] {
    debugger
    if (direction) {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
    else {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return 1;
        } else if (a[field] > b[field]) {
          return -1;
        } else {
          return 0;
        }
      });
      return array;
    }

  }

}
