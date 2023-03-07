import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Card } from './card.model';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent {

  numeroTarjeta = new FormControl('',[Validators.required, Validators.minLength(16),Validators.maxLength(16)]);
  titularTarjeta = new FormControl('', [Validators.required])
  fechaCaducidad = new FormControl('', [Validators.required])
  cvv = new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(3)] )

}
