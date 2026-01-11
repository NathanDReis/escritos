import { Component, effect, inject, NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  reload, updateProfile, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-profile.component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {
  auth = inject(AuthService);

  newEmail: string = '';
  
  form = new FormGroup({
    displayName: new FormControl(''),
    photoURL: new FormControl(''),
  });

  constructor() {
    effect(() => {
      const user = this.auth.firebaseUser();
      if (!user) return;

      this.form.patchValue({
        displayName: user.displayName,
        photoURL: user.photoURL,
      });

    });
  }

  async salvar(): Promise<void> {
    try {
      const user = this.auth.firebaseUser();
      if (!user) return;
  
      await updateProfile(user, {
        displayName: this.form.value.displayName!,
        photoURL: this.form.value.photoURL!
      });
  
      await this.refreshFirebaseUser(user);
    } catch (err) {
      console.error(err);
    }
  }

  async refreshFirebaseUser(user: User): Promise<void> {
    try {
      if (!user) return;
  
      await reload(user);
  
      this.auth.firebaseUser.set(user);
      this.auth.currentUser.set({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL
      });
    } catch (err) {
      console.error(err);
    }
  }

  async changePassword(): Promise<void> {
    try {
      await this.auth.changePassword();
    } catch (err) {
      console.error(err);
    }
  }

  async changeEmail(): Promise<void> {
    try {
      if (!this.newEmail) return;

      await this.auth.changeEmail(this.newEmail);
    } catch (err) {
      console.error(err);
    }
  }
}
