import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.scss'],
})
export class FormularioCreateComponentMedicamentos  implements OnInit {

  FormMedicamentos!:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.FormMedicamentos = this.formBuilder.group({
      nombre : new FormControl('',[Validators.required,Validators.minLength(3)]),
      dosis : new FormControl('',[Validators.required,Validators.minLength(1)]),
      lapso : new FormControl('',[Validators.required,Validators.minLength(3)]),
      duracion : new FormControl('',[Validators.required,Validators.minLength(3)]),
      id : new FormControl('',[Validators.required,Validators.minLength(1)]),
      
    });
  }
  ngOnInit() {}

  
  CreateMedicamentos(Form:any){
    // Se muestra por consola los valores enviados desde el formulario
    console.log(this.FormMedicamentos.value);
  }

}
