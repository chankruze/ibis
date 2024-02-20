import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    title: 'Home',
    component: HomeComponent,
    path: '',
  },
  {
    title: 'Dishes',
    component: DishesComponent,
    path: 'dishes',
  },
  {
    title: 'About',
    component: AboutComponent,
    path: 'about',
  },
  {
    title: 'Login',
    component: LoginComponent,
    path: 'login',
  },
];
