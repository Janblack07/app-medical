import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/service/auth.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {
  user!:any;
  constructor(private authService: AuthService){
    authService.userInformation().subscribe((data)=>{
      this.user=data.user
    })
  }

}
