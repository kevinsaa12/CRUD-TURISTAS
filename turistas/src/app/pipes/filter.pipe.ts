import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if (args === '' || args.length < 3) return value;
    const resultRegistro = [];
    for (const post of value) {
      if (post.ciudad.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultRegistro.push(post);
      };
    };

    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultRegistro.push(post);
      };
    };

    for (const post of value) {
      if (post.sitio.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultRegistro.push(post);
      };
    };
    return resultRegistro;
    
  }

}
