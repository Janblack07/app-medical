import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.scss'],
})
export class FormularioCreateComponent  implements OnInit {

  FormAntecentesMedicos!:FormGroup;

  Checked:boolean = false; Checked2:boolean = false; Checked3:boolean = false;


  constructor(private formBuilder:FormBuilder) {
    this.FormAntecentesMedicos = this.formBuilder.group({
      condicion_medica : new FormControl('',[Validators.required, Validators.minLength(3)]),
      alergia : new FormControl('No',Validators.required),
      cirujia_previa : new FormControl('No',Validators.required),
      tipo_sangre : new FormControl('',Validators.required),
      otro_datos : new FormControl('No', [Validators.required, Validators.minLength(1)])
    })
   }

  ngOnInit() {}

  // Aquí se crea los antecentes medicos

  CreateAntecentesMedicos(Form:any){
    console.log(this.FormAntecentesMedicos.value);
  }

  // En caso el checked de alergía sea true

    ChangeChecked(){
    this.Checked = !this.Checked;
    let ValorString;

    if (this.Checked) {
      ValorString = ''
    }else{
      ValorString = "No";
    }

    this.FormAntecentesMedicos.patchValue({
      alergia: ValorString
    });
  }

  ChangeChecked2(){
    this.Checked2 = !this.Checked2;
    let ValorString;

    if (this.Checked2) {
      ValorString = ''
    }else{
      ValorString = "No";
    }

    this.FormAntecentesMedicos.patchValue({
      cirujia_previa: ValorString
    });
  }

  ChangeChecked3(){
    this.Checked3 = !this.Checked3;
    let ValorString;

    if (this.Checked3) {
      ValorString = ''
    }else{
      ValorString = "No";
    }

    this.FormAntecentesMedicos.patchValue({
      otro_datos: ValorString
    });
  }

}
