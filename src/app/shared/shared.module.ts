import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from '../private/components/profile/profile.component';
import { HomeComponent } from '../private/components/home/home.component';
import { NavbarComponent } from '../private/components/navbar/navbar.component';
import { ChangePasswordComponent } from '../private/components/change-password/change-password.component';
import { SidebarComponent } from '../private/components/sidebar/sidebar.component';
import { FormularioCreateComponent } from '../private/components/antecendetes/formulario-create/formulario-create.component';
import { FormularioCreateComponentVacuna } from '../private/components/vacuna/formulario-create/formulario-create.component';

@NgModule({
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  exports: [
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    ChangePasswordComponent,
    SidebarComponent,
    FormularioCreateComponent,
    FormularioCreateComponentVacuna
  ],

  declarations: [
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    ChangePasswordComponent,
    SidebarComponent,
    FormularioCreateComponent,
    FormularioCreateComponentVacuna
  ],

})
export class SharedModule { }
