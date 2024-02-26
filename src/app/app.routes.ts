import { Routes } from '@angular/router';
 import { GetdataComponent } from './api/getdata/getdata.component';

 import { authGuard } from './service/auth.guard';
import { DashbordComponent } from './google/dashbord/dashbord.component';
import { ErrorComponent } from './google/error/error.component';
import { SignupComponent } from './google/signup/signup.component';
import { ValidationComponent } from './form/validation/validation.component';
export const routes: Routes = [
  // Redirect to login page by default

  // Login route
  { path: 'login', component: ValidationComponent , },
  // Signup route guarded by AuthGuard
  { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
  // Wildcard route - Redirect to signup page for any other invalid route
  { path: '**', redirectTo: 'signup' }
];
