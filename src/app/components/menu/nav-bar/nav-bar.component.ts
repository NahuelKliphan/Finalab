import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  busqueda: string;

  rutas: string[] = ['home','vehiculo','taller','verVehiculo','revision']

  Buscar() {
    if(this.rutas.includes(this.busqueda)){
      window.location.href = '/' + this.busqueda;
    }else
    {
      alert('No se encontraron resultados');
      this.busqueda = '';
    }

  }

}
