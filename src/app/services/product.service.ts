import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../shared/app.config';
import { Item } from '../interfaces/item.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: Item[] = [];
  filteredItems: Item[] = [];
  myProd: Product = {};
  constructor(private http: HttpClient) {
  }

  loadProducts() {
    return new Promise((resolve, reject) => {
      this.items = [];
      this.http.get(AppConstants.itemURL).subscribe((response: Item[]) => {
        this.items = response;
        resolve();
      });
    });
  }

  loadProduct(id: string) {
    return this.http.get(AppConstants.productPath(id));
  }

  filterProducts(patern: string) {
    this.filteredItems = [];
    return new Promise( (resolve, reject) => {
      if (this.items.length === 0) {
        this.loadProducts().then(() => {
          this.fillFilteredItems(patern);
        });
      } else {
        this.fillFilteredItems(patern);
      }
      resolve();
      console.log(this.filteredItems);
    });
  }

  fillFilteredItems(patern: string) {
    patern = patern.toUpperCase();
    this.items.forEach(item => {
      const value = item.titulo.toUpperCase();
      if (value.includes(patern) || value.indexOf(patern) > -1) {
        this.filteredItems.push(item);
      }
    });
  }
}
