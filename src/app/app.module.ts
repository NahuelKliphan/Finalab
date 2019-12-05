import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo/vehiculo.component';
import { NavBarComponent } from './components/menu/nav-bar/nav-bar.component';
import { HomeComponent } from './components/menu/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListaVehiculoComponent } from './components/vehiculo/lista-vehiculo/lista-vehiculo.component';
import { FormVehiculoComponent } from './components/vehiculo/form-vehiculo/form-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { Buscar } from './pipes/buscar';
import { FormCamionGeneralComponent } from './components/vehiculo/form-camion-general/form-camion-general.component';
import { TallerComponent } from './components/taller/taller/taller.component';
import { FormTallerComponent } from './components/taller/form-taller/form-taller.component';
import { ListaTallerComponent } from './components/taller/lista-taller/lista-taller.component';
import { FormCamionVolcadorComponent } from './components/vehiculo/form-camion-volcador/form-camion-volcador.component';

const routes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vehiculo',
    component: VehiculoComponent
  },
  {
    path: 'taller',
    component: TallerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    NavBarComponent,
    HomeComponent,
    ListaVehiculoComponent,
    FormVehiculoComponent,
    Buscar,
    FormCamionGeneralComponent,
    TallerComponent,
    FormTallerComponent,
    ListaTallerComponent,
    FormCamionVolcadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
