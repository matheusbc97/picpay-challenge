import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private authUserService: AuthUserService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newRequest: any = {
      url: `${environment.URL_API}/${request.url}`,
    };

    const token = this.authUserService.getToken();

    if (token) {
      newRequest.setHeaders = {
        Authorization: `Bearer ${token}`,
      };
    }

    const apiReq = request.clone(newRequest);

    return next.handle(apiReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.authUserService.logOut();
        }

        return throwError(() => error);
      })
    );
  }
}
