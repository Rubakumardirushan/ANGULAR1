import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValidatorComponent } from './component/validator/validator.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap';
}
