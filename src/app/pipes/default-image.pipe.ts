import { Pipe, PipeTransform } from '@angular/core';
const defaultImage = 'cv.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (path.trim().length) {
      return path;
    }
    return defaultImage;
  }

}
