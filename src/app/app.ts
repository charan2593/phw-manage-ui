import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Login } from './pages/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  user: any;
  isLoading = signal(false);
  timeoutId: any;

  constructor() {
  }

  ngOnInit(): void {
    this.isLoading.set(true);
    this.timeoutId = setTimeout(() => this.isLoading.set(false), 1000);
  }

  ngOnDestroy(): void {
    this.isLoading.set(false);
    this.timeoutId && clearTimeout(this.timeoutId);
  }

  // async login() {
  //   await signInWithPopup(this.auth, new GoogleAuthProvider());
  // }
}
