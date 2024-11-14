import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, // Redirige a login cuando la ruta está vacía
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegistrarComponent,
  }, // Ruta para LoginComponent
  {
    path: 'inicio',
    component: InicioComponent,
  }, // Ruta para InicioComponent
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
