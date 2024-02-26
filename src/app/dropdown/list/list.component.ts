import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormControl} from '@angular/forms';
import { Customer } from '../../Data/modles/customer';
import { ServicesService } from '../../customerservice/services.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  subjectcontrol=new FormControl('');

onclick(value:string){
  console.log(value);
}
onselect(event:Event){
  console.log((event.target as HTMLSelectElement).value);
}
constructor(private customerservice: ServicesService) {
  this.subjectcontrol.valueChanges.subscribe((value)=>{
    console.log(value);
  });
 }
 dropdownlist: Customer[] = [];
  ngOnInit(): void {
this.dropdownlist = this.customerservice.getcustomer();
  }
}
