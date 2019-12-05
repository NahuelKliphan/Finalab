import { Component, OnInit,Input} from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import {Vehiculo} from 'src/app/model/Vehiculo';
import {CamionGeneral} from 'src/app/model/CamionGeneral';


@Component({
  selector: 'app-form-camion-general',
  templateUrl: './form-camion-general.component.html',
  styleUrls: ['./form-camion-general.component.css']
})
export class FormCamionGeneralComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {

  }

  @Input() unVehiculo: Vehiculo;

   camionGeneral = {
    "capacidadCarga": null,
    "cantidadRuedas": null,
    "acoplado": null
  }

  unCamionGeneral: CamionGeneral;

  addCamionGeneral(){
    if(this.unVehiculo.tipo == 'Camion general')
    {
      this.unCamionGeneral = new CamionGeneral(this.unVehiculo.nroVehiculo,this.unVehiculo.marca,this.unVehiculo.modelo,this.unVehiculo.fechaCompra,this.unVehiculo.estado,this.unVehiculo.patente,this.unVehiculo.foto,this.unVehiculo.tipo,this.unVehiculo.observaciones,this.camionGeneral.capacidadCarga,this.camionGeneral.cantidadRuedas,this.camionGeneral.acoplado, this.unVehiculo.id)
      this.database.agregarCamionGeneral(this.unCamionGeneral);
    }
  }


}
