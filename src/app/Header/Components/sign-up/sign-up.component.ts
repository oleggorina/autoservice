import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignFormComponent } from './Components/sign-form/sign-form.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private matDialog: MatDialog) {}
  
  openDialog(): void {
    this.matDialog.open(SignFormComponent, {
      maxWidth: '500px',
      disableClose: true
    })
  }
}
