import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { loginFormModel } from '../models/loginform.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup(loginFormModel);

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    if (this._auth.user) {
      this._auth.closeSession();
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._auth.login(this.loginForm).subscribe({
        next: (u => {
          // console.log(u);
          if (u.id) {
            this._auth.openSession(u);
            this._router.navigateByUrl("/");
          }
        }),
        error: (e) => console.log(e),
      });
    }
  }
}
