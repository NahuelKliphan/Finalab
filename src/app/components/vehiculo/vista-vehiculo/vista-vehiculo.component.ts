import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { CamionGeneral } from 'src/app/model/CamionGeneral';
import { CamionVolcador } from 'src/app/model/CamionVolcador';

@Component({
  selector: 'app-vista-vehiculo',
  templateUrl: './vista-vehiculo.component.html',
  styleUrls: ['./vista-vehiculo.component.css']
})
export class VistaVehiculoComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  unVehiculo: Vehiculo;

  ngOnInit() {
    this.database.getVehiculoById(localStorage.getItem('id'));
    this.database.getCamionGeneralById(localStorage.getItem('id'));
    this.database.getCamionVolcadorById(localStorage.getItem('id'));
  }

}
