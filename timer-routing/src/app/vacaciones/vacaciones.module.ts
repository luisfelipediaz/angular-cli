import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacacionesRoutingModule } from './vacaciones-routing.module';
import { TipoVacacionesComponent } from './tipo-vacaciones/tipo-vacaciones.component';

@NgModule({
  imports: [
    CommonModule,
    VacacionesRoutingModule
  ],
  declarations: [TipoVacacionesComponent]
})
export class VacacionesModule { }
