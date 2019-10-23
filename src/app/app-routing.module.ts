import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesPageModule' },
  { path: 'add-clientes', loadChildren: './add-clientes/add-clientes.module#AddClientesPageModule' },
  { path: 'mostrar-clientes', loadChildren: './mostrar-clientes/mostrar-clientes.module#MostrarClientesPageModule' },
  { path: 'mostrar-clientes/:id/:nome/:telefone/:email', loadChildren: './mostrar-clientes/mostrar-clientes.module#MostrarClientesPageModule' },
  { path: 'add-clientes/:id/:nome/:telefone/:email', loadChildren: './add-clientes/add-clientes.module#AddClientesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
