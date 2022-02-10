import { FormControl, Validators } from "@angular/forms";

export const loginFormModel = {
    "nickname": new FormControl(null,[Validators.required]),
    "password": new FormControl(null,[Validators.required])
}