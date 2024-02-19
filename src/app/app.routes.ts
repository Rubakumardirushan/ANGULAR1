import { Routes } from '@angular/router';
 import { GetdataComponent } from './api/getdata/getdata.component';

 import { authGuard } from './service/auth.guard';
import { DashbordComponent } from './google/dashbord/dashbord.component';
import { ErrorComponent } from './google/error/error.component';
import { SignupComponent } from './google/signup/signup.component';
import { ValidationComponent } from './form/validation/validation.component';
export const routes: Routes = [

  {
    path: '', redirectTo:'login' , pathMatch:'full'
},
{
    path:'login',
    component:ValidationComponent
},{

  path:'signup',component:SignupComponent,
  canActivate: [authGuard]
},




];
