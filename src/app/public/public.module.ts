import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicRoutingModule,
    SharedModule,
    IonicModule

  ]
})
export class PublicModule { }
