import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { registerFormModel } from '../models/registerform.model';
import { passwordMismatchValidator } from '../models/registerform.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submittedFlag = false;
  registerForm = new FormGroup(registerFormModel, { validators: passwordMismatchValidator });
  get form(): { [key: string]: AbstractControl; } {
    return this.registerForm.controls;
  }
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submittedFlag = true;
    if (this.registerForm.valid) {
      this._auth.register(this.registerForm).subscribe({
        next: (r) => {
          console.log(r);
          this.submittedFlag = false;
          this._router.navigateByUrl("/login");
        },
        error: (e) => console.log(e),
      });
    }
  }
}