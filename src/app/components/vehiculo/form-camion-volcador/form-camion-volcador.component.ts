import { Component, OnInit, Input } from '@angular/core';
import {Vehiculo} from 'src/app/model/Vehiculo';
import { DatabaseService } from 'src/app/servicio/database.service';
import {CamionVolcador} from 'src/app/model/CamionVolcador';

@Component({
  selector: 'app-form-camion-volcador',
  templateUrl: './form-camion-volcador.component.html',
  styleUrls: ['./form-camion-volcador.component.css']
})
export class FormCamionVolcadorComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  @Input() unVehiculo: Vehiculo;

  camionGeneral = {
   "capacidadCarga": null,
   "cantidadRuedas": null
 }

 unCamionVolcador: CamionVolcador;

 addCamionVolcador(){
   if(this.unVehiculo.tipo == 'Camion volcador')
   {
     this.unCamionVolcador = new CamionVolcador(this.unVehiculo.nroVehiculo,this.unVehiculo.marca,this.unVehiculo.modelo,this.unVehiculo.fechaCompra,this.unVehiculo.estado,this.unVehiculo.patente,this.unVehiculo.foto,this.unVehiculo.tipo,this.unVehiculo.observaciones,this.camionGeneral.capacidadCarga,this.camionGeneral.cantidadRuedas,this.unVehiculo.id)
     this.database.agregarCamionVolcador(this.unCamionVolcador);
   }
 }

}
