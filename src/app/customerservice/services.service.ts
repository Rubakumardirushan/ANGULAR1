import { Injectable } from '@angular/core';
import { Customer } from '../Data/modles/customer';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  customer1:Customer[]=[];
  add(customer_name:string){
    const customer=new Customer();
    customer.name=customer_name;
    this.customer1.push(customer);

  }


  getcustomer(){
    return this.customer1;

  }
}
