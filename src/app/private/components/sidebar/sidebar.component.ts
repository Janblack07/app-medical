import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/public/service/auth.service';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  {
  @Input() user!:any;
  constructor(private authService: AuthService,private toastService: ToastrService,private router:Router){

  }
  logout(){
    this.authService.logout().subscribe(data=>{
      this.authService.deleteToken();
      this.router.navigate(['/login']);
      this.toastService.success('Has finalizado la sesión','Proceso exitoso')
    });
  }

}
