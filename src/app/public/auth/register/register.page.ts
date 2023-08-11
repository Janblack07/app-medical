import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  formRegister!:FormGroup

  constructor(private router: Router, private authService: AuthService,
    private formBuilder: FormBuilder) {
    this.formRegister = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    })
  }

 
  ngOnInit() {}

  Register(form: any) {
    if (this.formRegister.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formRegister.controls).forEach((control) =>
        control.markAsTouched(),
      );
      return;
    } else {
      this.authService.Login(form).subscribe((data) => {
        this.authService.setToken(data.access_token);
        this.router.navigate(['patient/home']);
      });
    }
  }

  
}
