import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../Shared/custom-validators';
import { General } from '../Shared/form.class';

@Injectable({
  providedIn: 'root'
})
export class GeneralFormService {

  generalInfo: General = new General(1, '', '', '', '');
  name!: AbstractControl;
  surname!: AbstractControl;
  phone!: AbstractControl;
  email!: AbstractControl;

  constructor(private fb: FormBuilder) { }

  generalForm(): FormGroup {
    const fg = this.fb.group({
      name: [this.generalInfo.name, [Validators.required, Validators.minLength(4)]],
      surname: [this.generalInfo.surname, [Validators.required]],
      phone: [this.generalInfo.phone, [Validators.required]],
      email: [this.generalInfo.email, [Validators.required, emailValidator]]
    });
    
    return fg;
  }

  createControls(): void {
    this.name = this.generalInfo.controls['name'];
    this.surname = this.generalInfo.controls['surname'];
    this.phone = this.generalInfo.controls['phone'];
    this.email = this.generalInfo.controls['email'];
  }
}
