import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const RELATIVE_URLS = ['assets', 'http', 'https'];

@Injectable()
export class PrefixInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (RELATIVE_URLS.some((url) => request.url.includes(url))) { return next.handle(request); }

    const apiUrl = `${environment.domainHost}/${request.url}`;
    return next.handle(request.clone({ url: apiUrl }));
  }
}
