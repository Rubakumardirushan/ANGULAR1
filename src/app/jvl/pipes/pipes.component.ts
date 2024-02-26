import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnChanges{
  today= Date.now();
  car:string[] =[];
  carname="";
  addcards(){
    this.car.push(this.carname);
this.carname='';
    console.log(this.car);
  }
  @Input() prop: string ="";
ngOnChanges(changes: SimpleChanges): void {
    console.log(' called this class',changes['prop'].currentValue)
}
}
