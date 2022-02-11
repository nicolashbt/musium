import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { registerFormModel } from '../models/registerform.model';
import { passwordMismatchValidator } from '../models/registerform.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup(registerFormModel, { validators: passwordMismatchValidator });
  get form(): { [key: string]: AbstractControl; } {
    return this.registerForm.controls;
  }
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this._auth.register(this.registerForm).subscribe({
        next: (r) => console.log(r),
        error: (e) => console.log(e),
      });
    }
  }
}