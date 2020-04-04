import { DonacionesComponent } from './donaciones/donaciones.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ModificarPasswordComponent } from './modificar-password/modificar-password.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { DescargasComponent } from './descargas/descargas.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path:"descargas", component: DescargasComponent},
  {path:"registrarCuenta", component: RegistrarCuentaComponent},
  {path:"modificarPassword", component: ModificarPasswordComponent},
  {path:"recuperarPassword", component:RecuperarPasswordComponent},
  {path:"donaciones", component:DonacionesComponent},
  {path:"**", component: InicioComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
