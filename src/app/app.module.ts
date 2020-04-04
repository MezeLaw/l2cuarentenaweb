import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DescargasComponent } from './descargas/descargas.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DescargasComponent,
    CuentasComponent,
    DonacionesComponent,
    NavbarComponent,
    FooterComponent,
    RegistrarCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
