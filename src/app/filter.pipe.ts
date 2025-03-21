import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return []; // Si aucune donnée, retourner une liste vide
    }
    if (!searchText) {
      return items; // Si aucun texte à rechercher, retourner tous les items
    }

    searchText = searchText.toLowerCase(); // Normaliser pour éviter les erreurs liées à la casse
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText) || 
             item.email.toLowerCase().includes(searchText);
    });
  }

}
