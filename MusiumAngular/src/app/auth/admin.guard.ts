import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { User } from "./models/user.model";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    private user$!: Observable<User | null>;
    constructor(private _auth: AuthService, private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        return (!!this._auth.user && (this._auth.user?.role == 1));
    }
}