import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  /**
   * get input values then store in loginData
   */
  @Input() loginData = { Username: '', Password: '' };
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * use API end-point to login the user by getting data from the input.
   * Then sotes the user's data in localstorage
   * @function userLogin
   * @param loginData {object}
   * @return user's data in json format
   */
  userLogin(): void {
    this.fetchApiData.userLogin(this.loginData).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('user', result.user.Username);
        localStorage.setItem('token', result.token);
        this.dialogRef.close(); // close the modal onsuccess!
        this.snackBar.open(
          `${this.loginData.Username} logged in successfully!`,
          'OK',
          {
            duration: 4000,
          }
        );
        this.router.navigate(['movies']);
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 4000,
        });
      }
    );
  }
}