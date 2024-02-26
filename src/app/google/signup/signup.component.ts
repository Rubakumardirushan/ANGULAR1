import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

constructor(private http: HttpClient ,private router:Router) {}
username: string = '';
ngOnInit() {
  const Token:any=localStorage.getItem('angular17token');
  const decodedToken:any = jwtDecode(Token);
  console.log(decodedToken.user);
 this.username=decodedToken.user;

}

getusers(){
  return this.http.get('https://fakestoreapi.com/products')
}
logout(){
  localStorage.removeItem('angular17token')

  this.router.navigate(['/login']);


  alert('Logout Successful');
}
}
