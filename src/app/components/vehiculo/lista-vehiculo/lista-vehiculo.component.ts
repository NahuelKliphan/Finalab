import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';

@Component({
  selector: 'app-lista-vehiculo',
  templateUrl: './lista-vehiculo.component.html',
  styleUrls: ['./lista-vehiculo.component.css']
})
export class ListaVehiculoComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getVehiculos();
  }

  busqueda: string = "";

  @Output() VehiculoAmodificar = new EventEmitter()




}
