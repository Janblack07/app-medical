import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../private/components/navbar/navbar.component';
import { SidebarComponent } from '../private/components/sidebar/sidebar.component';
import { FormularioCreateAntecedenteComponent } from '../private/components/antecendetes/formulario-create/formulario-create.component';
import { ChangePasswordComponent } from '../private/components/change-password/change-password.component';
import { FormularioCreateExamenesMedicosComponent } from '../private/components/examenes-medicos/formulario-create/formulario-create.component';
import { HomeComponent } from '../private/components/home/home.component';
import { FormularioCreateMedicamentosComponent } from '../private/components/medicamentos/formulario-create/formulario-create.component';
import { SearchComponent } from '../private/components/search/search.component';
import { FormularioCreateComponentVacuna } from '../private/components/vacuna/formulario-create/formulario-create.component';
import { ProfileComponent } from '../private/components/profile/profile.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [
    NavbarComponent,
    ProfileComponent,
    SidebarComponent,
    FormularioCreateAntecedenteComponent,
    ChangePasswordComponent,
    FormularioCreateExamenesMedicosComponent,
    HomeComponent,
    FormularioCreateMedicamentosComponent,
    SearchComponent,
    FormularioCreateComponentVacuna,ProgressComponent
  ],

  declarations: [
    SidebarComponent,
    NavbarComponent,
    FormularioCreateAntecedenteComponent,
    ChangePasswordComponent,
    FormularioCreateExamenesMedicosComponent,
    HomeComponent,
    FormularioCreateMedicamentosComponent,
    SearchComponent,
    FormularioCreateComponentVacuna,
    ProfileComponent,ProgressComponent
  ],
})
export class SharedModule {}
