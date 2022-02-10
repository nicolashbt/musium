import { FormControl, Validators } from "@angular/forms";

export const registerFormModel = {
    "nickname": new FormControl(null,[Validators.required]),
    "password": new FormControl(null,[Validators.required]),
    "repeatPassword": new FormControl(null,[Validators.required]),
    "email": new FormControl(null,[Validators.required])
}