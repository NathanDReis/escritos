import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  updateProfile } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-profile.component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {
  auth = inject(AuthService);
  
  form = new FormGroup({
    displayName: new FormControl(''),
    photoURL: new FormControl('')
  });

  constructor() {
    effect(() => {
      const user = this.auth.firebaseUser();
      if (!user) return;

      this.form.patchValue({
        displayName: user.displayName,
        photoURL: user.photoURL
      });

    });
  }

  async salvar(): Promise<void> {
    const user = this.auth.firebaseUser();
    if (!user) return;

    await updateProfile(user, {
      displayName: this.form.value.displayName!,
      photoURL: this.form.value.photoURL!
    });
  }

  async changePassword(): Promise<void> {
    await this.auth.changePassword();
  }

}
