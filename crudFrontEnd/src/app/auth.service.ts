import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  addProduct(formData: Object): Observable<any> {
    return this._HttpClient.post('http://localhost:8080/products', formData);
  }

  showProducts(): Observable<any> {
    return this._HttpClient.get('http://localhost:8080/products');
  }

  deletProduct(id: string, ): Observable<any> {
    return this._HttpClient.delete(`http://localhost:8080/products/${id}`);
  }

  updateProduct(id: string, formData: Object): Observable<any> {
    return this._HttpClient.put(`http://localhost:8080/products/${id}`, formData);
  }

}
