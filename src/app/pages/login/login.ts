import { Component, inject } from '@angular/core';
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
  year = new Date().getFullYear();
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

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
