import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [

  {
    path:'',
    component:PublicComponent,
    children:[
       {
        path: '',
        loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
      },
     /*   {
        path: '',
        redirectTo:'login',
        pathMatch:'full'
      }, */
      {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'resetpassword',
        loadChildren: () => import('./auth/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
      },
      {
        path: 'verification',
        loadChildren: () => import('./auth/verification/verification.module').then( m => m.VerificationPageModule)
      },

    ]
  }



  // Esto es por el momento solo para visualizar los componentes



];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
