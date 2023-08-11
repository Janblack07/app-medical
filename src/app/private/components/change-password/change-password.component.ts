import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-component',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent  implements OnInit {

  formChangePassword!:FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formChangePassword = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    })
  }

  ngOnInit() {}

  ChangePassword(form: any) {
    if (this.formChangePassword) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formChangePassword.controls).forEach((control) =>
        control.markAsTouched(),
      );
      return;
    } else {
     
    }
  }
}
