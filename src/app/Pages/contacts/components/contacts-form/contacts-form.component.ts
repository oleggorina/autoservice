import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralFormService } from 'src/app/Services/general-form.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  
  formContacts!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private generalFormService: GeneralFormService) {}

  ngOnInit(): void {
    this.formContacts = this.fb.group({
      header: this.generalFormService.generalForm(),
      message: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log(this.formContacts.value)
  }
}
