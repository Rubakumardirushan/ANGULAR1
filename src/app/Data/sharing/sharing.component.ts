import { Component } from '@angular/core';
import { Customer } from '../modles/customer';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServicesService } from '../../customerservice/services.service';
@Component({
  selector: 'app-sharing',
  standalone: true,
  imports: [],
  templateUrl: './sharing.component.html',
  styleUrl: './sharing.component.css'
})
export class SharingComponent {
  constructor(private customerservice: ServicesService) { }

  addcustomer(customer_name:string){
    this.customerservice.add(customer_name);
  }
}
