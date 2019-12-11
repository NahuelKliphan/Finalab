import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import { Vehiculo } from 'src/app/model/Vehiculo';

@Component({
  selector: 'app-vista-vehiculo',
  templateUrl: './vista-vehiculo.component.html',
  styleUrls: ['./vista-vehiculo.component.css']
})
export class VistaVehiculoComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  unVehiculo: Vehiculo = new Vehiculo(null, '', '', null, '', '', null, '', '', null, null, null);

  ngOnInit() {

    this.database.getVehiculoById(localStorage.getItem('id')).subscribe(data => {
      this.unVehiculo = data;
    });

  }

  irRevisiones() {
    window.location.href = '/revision';
  }

  volver() {
    window.location.href = '/vehiculo';
  }

}
