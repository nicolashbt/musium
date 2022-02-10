import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user = new BehaviorSubject<User | null>(null);
    get user(): User | null { return this._user.value }
    get user$(): Observable<User | null> { return this._user.asObservable(); }
    private _url = "https://localhost:7095/api/user/";

    constructor(private _http: HttpClient) { }

    login(loginForm: FormGroup) {
        return this._http.post<User>(this._url + 'login', loginForm.value);
    }

    register(registerForm: FormGroup) {
        return this._http.post<User>(this._url + 'register', registerForm.value);
    }

    openSession(user: User) {
        this._user.next(user);
        console.log("Session Opened");
    }

    closeSession() {
        this._user.next(null);
        console.log("Session Closed");
    }
}