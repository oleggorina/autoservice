import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl): {[key: string]: any} | null {
  const emailRegex = /^([a-zA-Z0-9 \.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
  const value = control.value;
  const result = emailRegex.test(value);

  if (!result) {
    return {emailValidator: {value}}
  }
  
  return null;
}