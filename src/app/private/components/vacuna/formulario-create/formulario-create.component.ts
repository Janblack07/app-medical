import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.scss'],
})
export class FormularioCreateComponentVacuna  implements OnInit {

  FormVacuna!:FormGroup;


  constructor(private formBuilder:FormBuilder) { 
    this.FormVacuna = this.formBuilder.group({
      nombre : new FormControl('',[Validators.required,Validators.minLength(3)]),
      fecha : new FormControl('',Validators.required) 
    });
  }



  ngOnInit() {}

  // Aquí iria para llamar al servicio y crear una vacuna

  CreateAntecentesMedicos(Form:any){
    // Se muestra por consola los valores enviados desde el formulario
    console.log(this.FormVacuna.value);
  }

}
