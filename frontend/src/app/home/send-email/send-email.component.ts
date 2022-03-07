import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from '../../services/email-service.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  data: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _emailService: EmailServiceService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.data = {};
  }

  ngOnInit(): void {}

  sendEmail() {
    this._emailService.sendEmail(this.data).subscribe({
      next: () => {
        this._router.navigate(['/']);
        this.message = 'Mailing successful';
        this.openSnackBarSuccesful();
      },
      error: (e) => {
        this.message = e.error.message;
        this.openSnackBarError();
      },
    });
  }

  openSnackBarSuccesful() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['styleSnackBarError'],
    });
  }
}
