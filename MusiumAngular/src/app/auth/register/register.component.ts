import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { registerFormModel } from '../models/registerform.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup(registerFormModel);
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
