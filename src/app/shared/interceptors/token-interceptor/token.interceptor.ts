import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenProviderService } from '../../providers/token-provider/token-provider.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenProviderService: TokenProviderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addTokenInHeaders(request);
    return next.handle(request);
  }

  private addTokenInHeaders(request: HttpRequest<unknown>) {
    const token = this.tokenProviderService.getToken();

    if (token) {
      return request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return request;
  }
}
