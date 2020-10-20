import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppCacheService } from './app-cache.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {


  constructor(protected cacheSrv: AppCacheService){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let token = this.cacheSrv.token;
    if (token) {
      let secureHeaders = req.headers;
        const headerName = 'X-ss-pid';
        const headopt = 'X-ss-opt';
        if (token !== null && !req.headers.has(headerName)) {
            req = req.clone({ headers: req.headers.set(headerName, token) });
            req = req.clone({ headers: req.headers.set(headopt, 'perm') });
        }
        return next.handle(req);
    }
    return next.handle(req);
  }
}

