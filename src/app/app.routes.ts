import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './Guard/auth.guard';
import { childAuthGuard } from './Guard/child-auth.guard';
import { authdGuard } from './Guard/authd.guard';
import { LoginComponent } from './common/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard], },
  { path: 'about', component: AboutComponent, canActivate: [authGuard], },
  { path: 'about/:submenu/:id', component: AboutComponent, canActivate: [authGuard], },
  { path: 'login', component: LoginComponent, },
  { path: 'contact', loadComponent: () => import('./common/contact/contact.component').then(m => m.ContactComponent), canActivate: [authGuard], },
  {
    path: 'customer', component: CustomerComponent, canActivate: [authGuard], canActivateChild: [childAuthGuard], canDeactivate: [authdGuard],
    children: [
      {
        path: 'add', component: AddComponent, canActivate: [authGuard],
      },
      {
        path: 'edit/:id', component: AddComponent,
      },
    ]
  },
  { path: 'home', redirectTo: '' },
  { path: '**', component: StatusComponent }
];
