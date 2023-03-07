import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss'],
})
export class UpdatepasswordComponent {


  
  pActual = new FormControl('', [Validators.required,   Validators.minLength(8)]);

  submitted = false;

  onSubmit() { this.submitted = true;}

  
}
