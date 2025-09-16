import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  auth = inject(Auth);
  year = new Date().getFullYear();
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  async onGoogleLogin() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
      // navigate to dashboard
    } finally { }
    // TODO: Replace with your real Google OAuth flow (e.g., AngularFireAuth.signInWithPopup(new GoogleAuthProvider()))
    // This timeout is only for demo of the loading state.
    // setTimeout(() => {
    //   this.loading.set(false);
    // Navigate to dashboard after successful login
    // this.router.navigate(['/dashboard']);
    //   alert('Google login clicked — wire this up to Firebase/Auth or your backend OAuth flow.');
    // }, 1000);
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Navigate to dashboard after successful login
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        alert('Login failed: ' + err.message);
      });
  }


  onAltLogin() {
    alert('Fallback email login — build your email/password or magic-link flow here.');
  }
}
