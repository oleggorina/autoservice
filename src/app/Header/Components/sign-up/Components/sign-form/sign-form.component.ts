import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GeneralFormService } from 'src/app/Services/general-form.service';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  formSign!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private generalFormService: GeneralFormService,
    private dialogRef: MatDialogRef<SignFormComponent>) {}
  
  ngOnInit(): void {
    this.formSign = this.fb.group({
      header: this.generalFormService.generalForm(),
      model: ['', Validators.required],
      year: ['', Validators.required],
      cause: ['', Validators.required]
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  onSubmit(): void {
    console.log(this.formSign.value)
  }

}
