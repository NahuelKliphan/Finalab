import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { DatabaseService } from 'src/app/servicio/database.service'

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  unVehiculo: Vehiculo = new Vehiculo(null, '', '', null, '', '', '', '');

  editar: boolean = false;

  addVehiculo() {

    if(this.formCompleto())
    {

      if (this.editar == false) {
        this.database.agregarVehiculo(new Vehiculo(this.unVehiculo.nroVehiculo, this.unVehiculo.marca, this.unVehiculo.modelo, this.unVehiculo.fechaCompra, this.unVehiculo.estado, this.unVehiculo.patente, this.unVehiculo.foto, this.unVehiculo.observaciones));
        this.vaciar();
      }
      else {
        
      }

    }
    else
    {
      alert('Faltan datos')
    }

    this.editar = false;


  }


  formCompleto(){

    if(this.unVehiculo.nroVehiculo != null && this.unVehiculo.patente != '' && this.unVehiculo.marca != '' && this.unVehiculo.modelo != '' && this.unVehiculo.fechaCompra != null && this.unVehiculo.estado != '' )
    {
      return true;
    }
    else
    {
      return false;
    }

  }

  vaciar(){
    this.unVehiculo = new Vehiculo(null, '', '', null, '', '', '', '');
  }


}






