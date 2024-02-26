import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, RouterOutlet } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { authGuard } from '../../service/auth.guard';
import { jwtDecode } from 'jwt-decode';

import { OnInit } from '@angular/core';
@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet,FormsModule,HttpClientModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
constructor(private http: HttpClient ,private router: Router,private fb:FormBuilder) { }

credentials = {
  username: '',
  password: ''
};





login() {


  this.http.post('https://fakestoreapi.com/auth/login', this.credentials).subscribe(
      // Navigate to homepage on success
      data=> {
        let token = (data as any).token;
        localStorage.setItem('angular17token',token)

        const decodedToken:any = jwtDecode(token);
        console.log(decodedToken);
        alert(authGuard);


        this.router.navigate(['/signup']);
      },

      // Show error message on failure
      err => {

        window.alert((authGuard));
      }
    );
}



}

