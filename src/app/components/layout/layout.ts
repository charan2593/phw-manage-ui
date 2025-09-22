import { TitleCasePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [TitleCasePipe, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  userDetails = input<any>();
  auth = inject(Auth);
  tabs = [
    {
      label: 'Dashboard', route: '/dashboard'
    },
    {
      label: 'Customers', route: '/customers'
    },
    {
      label: 'Payments', route: '/payments'
    },
    {
      label: 'Inventory', route: '/inventory'
    }
  ];
  fullYear: number = new Date().getFullYear();

  constructor(private router: Router) { }

  async logout() {
    await signOut(this.auth).finally(() => {
      this.router.navigate(['/login']);
    });
  }

}
