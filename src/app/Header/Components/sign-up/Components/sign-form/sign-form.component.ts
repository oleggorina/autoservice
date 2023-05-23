import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  formSign!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: DialogRef<SignFormComponent>) {}
  
  ngOnInit(): void {
    this.formSign = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      cause: ['', Validators.required]
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  submitForm(event: Event): void {
    event.preventDefault();
    console.log(this.formSign.value);
  }

}
