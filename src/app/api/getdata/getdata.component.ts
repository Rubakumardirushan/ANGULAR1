import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getdata.component.html',
  styleUrl: './getdata.component.css'
})
export class GetdataComponent {
  data1:any[]=[];
httpclient=inject(HttpClient);

fetchdata() {
  this.httpclient.get('https://fakestoreapi.com/products').subscribe((data)=>{
    console.log(data);
    this.data1=data as any[];

  });
 }
}
