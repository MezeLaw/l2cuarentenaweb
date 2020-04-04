import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { DescargasComponent } from './descargas/descargas.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path:"descargas", component: DescargasComponent},
  {path:"registrarCuenta", component: RegistrarCuentaComponent},
  {path:"**", component: InicioComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
