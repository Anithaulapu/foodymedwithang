import { HttpRequest,HttpHandler,HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class customeInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token   = localStorage.getItem('TOKEN');
    const tokenValue  = (token) ? token : "Bearer";
    const newCloneRequest = req.clone({
      setHeaders:{
        Authorization:tokenValue
      }
    });
    return next.handle(newCloneRequest);
  }
}

