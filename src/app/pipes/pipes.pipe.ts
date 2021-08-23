import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
})
export class PipesPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultadoPost = [];
    for (const post of value) {
      if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        console.log('sip');
        resultadoPost.push(post);
      }
    }
    return resultadoPost;
  }
}
