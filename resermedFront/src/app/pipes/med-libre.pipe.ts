import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medLibre'
})
export class MedLibrePipe implements PipeTransform {

  transform(items:any[],idMant:number | null): any[] {
    if(!idMant){
      return items;
    }
    return items.filter(item =>item.MantenedorId == idMant);
  }

}
