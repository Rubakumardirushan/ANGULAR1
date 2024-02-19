import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
constructor(private http: HttpClient ,private router:Router,private userService: UserService) {}
ngOnInit() {

}
username:string=this.userService.userData;
getusers(){
  return this.http.get('https://fakestoreapi.com/products')
}
logout(){
  localStorage.removeItem('angular17token')

  this.router.navigate(['/login']);


  alert('Logout Successful');
}
}
