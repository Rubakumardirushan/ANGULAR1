import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  today= Date.now();
  car:string[] =[];
  carname="";
  addcards(){
    this.car.push(this.carname);
this.carname='';
    console.log(this.car);
  }
}
