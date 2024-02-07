import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './validator.component.html',
  styleUrl: './validator.component.css'
})
export class ValidatorComponent {
loginForm:FormGroup
  constructor(private fb:FormBuilder) {
this.loginForm=this.fb.group({
  username:['',Validators.minLength(6)],
  password:['',Validators.minLength(6)]
})
  }
  onSubmit(){
    alert(this.loginForm.value.username+" "+this.loginForm.value.password)
    console.log(this.loginForm.value)
  }
}
