import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  auth = inject(Auth);
  year = new Date().getFullYear();

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


  onAltLogin() {
    alert('Fallback email login — build your email/password or magic-link flow here.');
  }
}
