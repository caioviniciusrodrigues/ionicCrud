import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarClientesPage } from './mostrar-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarClientesPage]
})
export class MostrarClientesPageModule {


}
