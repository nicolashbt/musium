import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { User } from "./models/user.model";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private user$!: Observable<User | null>;
    constructor(private _auth: AuthService, private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        if(!(!!this._auth.user)){
            this._router.navigateByUrl("/login")
        }
        return !!this._auth.user;
    }
}