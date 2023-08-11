import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCreateAntecedenteComponent } from './components/antecendetes/formulario-create/formulario-create.component';
import { FormularioCreateComponentVacuna } from './components/vacuna/formulario-create/formulario-create.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [


  {
    path:'',
    component:PrivateComponent,
    children:[
      {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
      },

       {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
      },

       {
        path: 'profile/:id',
        loadChildren: () => import('./pages/doctor/profile/profile.module').then( m => m.ProfilePageModule)
      },


      // Esto es por el momento solo para visualizar los componentes

       {
        path: 'formulario/antecendentes/create',
        component: FormularioCreateAntecedenteComponent
      },

      {
        path: 'formulario/vacuna/create',
        component: FormularioCreateComponentVacuna
      }



      // Esto es por el momento solo para visualizar los componentes
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
