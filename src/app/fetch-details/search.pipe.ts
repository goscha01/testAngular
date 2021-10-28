import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    //Based on args , filter out results based on tradeName and it should be case insensitive.

    return value;


}

}
