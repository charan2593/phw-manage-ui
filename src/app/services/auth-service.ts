import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  // Login existing user
  login(email: string, password: string) {
    return of(true).pipe(delay(1000)).toPromise(); // Mocking login for demo purposes
  }

  // Logout
  logout() {
    return true;
  }
}
