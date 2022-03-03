import { Component, OnInit, Input, Inject } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss'],
})
export class EditProfileFormComponent implements OnInit {

  @Input() userProfile = { 
    Username: localStorage.getItem('user'), 
    Password: '', 
    Email: '', 
    Birthday: '' };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<EditProfileFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  /* The user is able to update their personal data.*/
  updateUser(): void {
    this.fetchApiData
    .updateUser(this.userProfile).subscribe(
      (res) => {
        this.dialogRef.close();
        localStorage.setItem('user', res.Username);
        this.snackBar.open('Profile updated successfully!', 'Ok', {
          duration: 2000,
        });
      },
      (res) => {
        // console.log(res);
        this.snackBar.open(res, 'Ok', {
          duration: 2000,
        });
      }
    );

    setTimeout(function () {
      window.location.reload();
    }, 1000);

  }
}


