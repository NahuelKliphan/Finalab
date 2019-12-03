import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo/vehiculo.component';
import { NavBarComponent } from './components/menu/nav-bar/nav-bar.component';
import { HomeComponent } from './components/menu/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormAutoComponent } from './components/vehiculo/form-auto/form-auto.component';
import { ListaVehiculoComponent } from './components/vehiculo/lista-vehiculo/lista-vehiculo.component';

const routes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vehiculo',
    component: VehiculoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    NavBarComponent,
    HomeComponent,
    FormAutoComponent,
    ListaVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
