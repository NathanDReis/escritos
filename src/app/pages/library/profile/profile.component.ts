import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  reload, updateProfile, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';
import { ToastService } from '../../../shared/components/toast/toast.service';

@Component({
  selector: 'app-profile.component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {
  private toast = inject(ToastService);
  
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
      this.toast.error("Não foi possível salvar seus dados agora.");
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
      this.toast.error("Não foi possível carregar seus dados no momento.");
    }
  }

  async changePassword(): Promise<void> {
    try {
      await this.auth.changePassword();
    } catch (err) {
      this.toast.error("Não foi possível alterar sua senha no momento.");
    }
  }

  async changeEmail(): Promise<void> {
    try {
      if (!this.newEmail) return;

      await this.auth.changeEmail(this.newEmail);
    } catch (err) {
      this.toast.error("Não foi possível alterar o seu e-mail no momento.");
    }
  }
}
