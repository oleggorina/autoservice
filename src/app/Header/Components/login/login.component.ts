import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from './Components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogged: boolean = false;
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(LoginFormComponent, {
      disableClose: true
    })
  }
}
