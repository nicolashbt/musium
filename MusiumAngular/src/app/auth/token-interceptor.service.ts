import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private _authService: AuthService) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let token = this._authService.user?.token;
        if (token != "") {
            let clone = request.clone({ setHeaders: { 'Authorization': 'Bearer ' + token } });
            return next.handle(clone);
        }
        return next.handle(request);
    }
}