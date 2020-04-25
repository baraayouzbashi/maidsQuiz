import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpResponse,
  HttpInterceptor, HttpHandler
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  private cache; // <url, response>
  constructor() {
    this.cache = new Map<string, HttpResponse<any>>(); // in memory cache => will be reset on window refresh
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req.urlWithParams);
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}

function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: Map<string, HttpResponse<any>>): Observable<HttpEvent<any>> {

  return next.handle(req.clone()).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cache.set(req.urlWithParams, event);
      }
    })
  );
}
