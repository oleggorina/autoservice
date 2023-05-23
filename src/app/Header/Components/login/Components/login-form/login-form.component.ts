import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  formLogin!: FormGroup;

  constructor(
    private dialogRef: DialogRef<LoginFormComponent>,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  submitForm(): void {
    console.log(this.formLogin.value)
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
