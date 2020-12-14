import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

    constructor(private http: HttpClient) { }
    options: any;

    get(url: string, params?: any, response?: any): Observable<any> {
        this.options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
        if (!!response) {
            this.options.observe = response
        }
        if (!!params) {
          this.options.params = params
        }
        return this.http.get<any>(url, this.options)
      }

      post(url: string, body: any, response?: any) {
        this.options = { responseType: 'application/json' }
        if (response !== undefined) {
          this.options.observe = response
          return this.http.post(url, body, this.options)
        }
        return this.http.post(url, body, this.options)
      }
    
      put(url: string, body: any, options?: any, response?: any) {
        this.options = { responseType: 'application/json', ...options }
    
        if (response !== undefined) {
          this.options.observe = response
          return this.http.put(url, body, this.options)
        }
        return this.http.put(url, body, this.options)
      }
    
      delete(url: string) {
        return this.http.delete(url)
      }

}