import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.scss'],
})
export class FormularioCreateComponentExamenes  implements OnInit {

  FormExamenes!:FormGroup;


  constructor(private formBuilder:FormBuilder) { 
    this.FormExamenes = this.formBuilder.group({
      nombre : new FormControl('',[Validators.required,Validators.minLength(3)]),
      fecha : new FormControl('',Validators.required),
      resultado : new FormControl('',Validators.required),
      id : new FormControl('',[Validators.required,Validators.minLength(1)]),

      
    });
  }

  ngOnInit() {}

    

    CreateExamenesMedicos(Form:any){
      // Se muestra por consola los valores enviados desde el formulario
      console.log(this.FormExamenes.value);
    }
  

}
