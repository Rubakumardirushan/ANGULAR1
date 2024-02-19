import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './componets/head/head.component';
import { ValidationComponent } from './form/validation/validation.component';
import { ListComponent } from './dropdown/list/list.component';
import { GetdataComponent } from './api/getdata/getdata.component';
import { JvlcodeComponent } from './bootstrap/jvlcode/jvlcode.component';
import { LayoutComponent } from './blog/layout/layout.component';
import { ErrorComponent } from './google/error/error.component';
import { DashbordComponent } from './google/dashbord/dashbord.component';
import { SignupComponent } from './google/signup/signup.component';
import { PipesComponent } from './jvl/pipes/pipes.component';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeadComponent,ValidationComponent,ListComponent,GetdataComponent,PipesComponent,JvlcodeComponent,LayoutComponent,ErrorComponent,DashbordComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap';
}
