import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Login } from './pages/login/login';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  auth = inject(Auth);
  user: any;
  firestore = inject(Firestore);
  isLoading = signal(false);
  timeoutId: any;

  constructor() {
    this.auth.onAuthStateChanged(u => this.user = u);
  }

  ngOnInit(): void {
    this.isLoading.set(true);
    this.timeoutId = setTimeout(() => this.isLoading.set(false), 1000);
  }

  ngOnDestroy(): void {
    this.isLoading.set(false);
    this.timeoutId && clearTimeout(this.timeoutId);
  }

  async login() {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // Add data
  // async addItem() {
  //   await addDoc(collection(this.firestore, 'items'), { name: 'Test', createdAt: new Date() });
  // }

  // Get data
  // getItems() {
  //   collectionData(collection(this.firestore, 'items')).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
