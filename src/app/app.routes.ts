import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Customers } from './pages/customers/customers';
import { Payments } from './pages/payments/payments';
import { Inventory } from './pages/inventory/inventory';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'customers',
        component: Customers
    },
    {
        path: 'payments',
        component: Payments
    },
    {
        path: 'inventory',
        component: Inventory
    },
];
