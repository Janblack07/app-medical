import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { IonicModule } from '@ionic/angular';
import { PrivateComponent } from './private.component';



@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrivateRoutingModule,
    IonicModule
  ],
  exports:[
  ]
})
export class PrivateModule { }
