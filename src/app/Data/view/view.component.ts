import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from '../modles/customer';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../customerservice/services.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
viewcustomer: Customer[] = [];
  constructor(private customerservice: ServicesService) { }

  ngOnInit(): void {
      this.viewcustomer = this.customerservice.getcustomer();
  }

  }

