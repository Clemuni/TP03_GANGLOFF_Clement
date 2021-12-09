import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import '../ts/types';

@Injectable()
export class MonService {
  constructor() {}

  getCatalog(): Observable<Product[]> {
    const catalog: Observable<Product[]> = of([
      { label: 'Salade', price: 1.99 },
      { label: 'Tomate', price: 2.99 },
      { label: 'Oignon', price: 0.99 },
      { label: 'Sauce blanche', price: 5.99 },
    ]);
    return catalog;
  }
}
