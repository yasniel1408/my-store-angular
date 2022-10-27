import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpContextToken, HttpContext } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const CHECK_TIME = new HttpContextToken<boolean>(() => false);

export function checkTime() {
  return new HttpContext().set(CHECK_TIME, true);
}

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TIME)) {
      const start = performance.now();

      return next.handle(request).pipe(
        tap((response) => {
          const time = performance.now() - start + ' ms';
          console.log('REQUEST: ', request, ' RESPONSE: ', response, ' TIME: ', time);
        })
      );
    }

    return next.handle(request);
  }
}
