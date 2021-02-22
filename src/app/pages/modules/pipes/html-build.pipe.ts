import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'htmlBuild'
})
export class HtmlBuildPipe  implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(style) {
    return this.domSanitizer.bypassSecurityTrustHtml(style);
  }

}
