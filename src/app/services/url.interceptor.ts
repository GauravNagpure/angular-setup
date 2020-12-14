import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import {environment} from '../../environments/environment'

@Injectable()
export class URLIntercepter implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: `${environment.appURL}${request.url}`
    })
    return next.handle(request)
  }
}
