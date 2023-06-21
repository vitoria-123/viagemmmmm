import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  cadastroForm: FormGroup;

  constructor(private builder: FormBuilder){
    this.cadastroForm = builder.group({
      destino: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      tipo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
      dataC: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      dataF: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      orcam: ['', Validators.required],
      qtde: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    },)
  }
}
