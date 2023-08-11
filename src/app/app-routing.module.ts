import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormularioCreateComponent } from './private/components/antecendetes/formulario-create/formulario-create.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./public/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./public/auth/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./public/auth/verification/verification.module').then( m => m.VerificationPageModule)
  },
  
  {
    path: 'patient/home',
    loadChildren: () => import('./private/pages/paciente/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'patient/profile',
    loadChildren: () => import('./private/pages/paciente/profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'doctor/home',
    loadChildren: () => import('./private/pages/doctor/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'doctor/profile',
    loadChildren: () => import('./private/pages/doctor/profile/profile.module').then( m => m.ProfilePageModule)
  },


  // Esto es por el momento solo para visualizar los componentes

  {
    path: 'formulario/antecendentes/create',
    component: FormularioCreateComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
