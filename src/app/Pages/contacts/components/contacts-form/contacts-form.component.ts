import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  
  formContacts!: FormGroup;

  constructor(
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formContacts = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log(this.formContacts.value)
  }
}
