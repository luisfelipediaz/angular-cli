import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Producto } from "./producto";

@Injectable()
export class ProductosService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'assets/json/productos.json';  // URL to web api

  constructor(private http: Http) { }

  getProductos(): Promise<Producto[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json() as Producto[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
