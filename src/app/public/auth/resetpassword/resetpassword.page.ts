import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  formResetPassword!:FormGroup
  
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formResetPassword = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]]
    })
  }

  ngOnInit() {}

  ResetPassword(form: any) {
    if (this.formResetPassword.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formResetPassword.controls).forEach((control) =>
        control.markAsTouched(),
      );
      return;
    } else {
      this.router.navigate(['login']);
    }
  }
  

}
