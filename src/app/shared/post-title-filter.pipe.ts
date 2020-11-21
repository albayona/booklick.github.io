import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "../post/content";

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(list: Content[], filterText: string): any {
    console.log(filterText);
    return list ? list.filter(t => (t.description  + t.title + t.creator ).search(new RegExp(filterText, 'i')) > -1) : [];
  }

  }
