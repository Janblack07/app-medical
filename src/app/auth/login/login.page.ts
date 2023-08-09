import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin!:FormGroup
  constructor(private  router: Router,private  authService: AuthService,
    private formBuilder: FormBuilder) {
      this.formLogin= this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      })
    }

  ngOnInit(): void {
  }

  createAccount() {
    this.router.navigateByUrl("/register");
  }

  resetPassword() {
    this.router.navigateByUrl("/resetpassword");
  }


  Login(form: any) {
    if (this.formLogin.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formLogin.controls).forEach((control) =>
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
