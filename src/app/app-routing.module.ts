import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/modulos/home/home.component';


const routes: Routes = [
  // Redirige a login por defecto
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent}, // Ruta para el login
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Aquí puedes agregar más rutas para otros componentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
