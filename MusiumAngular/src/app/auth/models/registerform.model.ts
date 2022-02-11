import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const registerFormModel = {
    "nickname": new FormControl(null, [Validators.required, Validators.minLength(4)]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(4)]),
    "repeatPassword": new FormControl(null, [Validators.required, Validators.minLength(4)]),
    "email": new FormControl(null, [Validators.required, Validators.email])
}

export const passwordMismatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return control.get('password')?.value === control.get('repeatPassword')?.value
        ? null : { mismatch: true };
}