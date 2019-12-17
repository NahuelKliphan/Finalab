import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import { Vehiculo } from 'src/app/model/Vehiculo';

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

  @Output() VehiculoAmodificar = new EventEmitter();
  @Output() Borrar = new EventEmitter();

  eliminarVehiculo(id: number) {
    if(window.confirm('Se borraran todas sus revisiones tambien, esta seguro?'))
    {
      this.database.borrarVehiculo(id);
      this.database.getVehiculos();
      this.Borrar.emit();
    }
  }

  solicitarModificacion(unVehiculo: Vehiculo) {
    this.VehiculoAmodificar.emit(unVehiculo);
  }

  verDetalle(id: number) {
    localStorage.setItem('id', id.toString());
  }
}
