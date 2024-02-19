import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  subjectcontrol=new FormControl('');

onclick(value:string){
  console.log(value);
}
onselect(event:Event){
  console.log((event.target as HTMLSelectElement).value);
}
constructor() {
  this.subjectcontrol.valueChanges.subscribe((value)=>{
    console.log(value);
  });
 }
}
