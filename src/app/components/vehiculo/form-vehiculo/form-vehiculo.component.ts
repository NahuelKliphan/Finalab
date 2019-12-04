import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/Vehiculo';
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

  unVehiculo: Vehiculo = new Vehiculo(null, '', '', null, '', '', '', '','');

  editar: boolean = false;

  //this.database.agregarCamionGeneral(new CamionGeneral(this.unVehiculo.nroVehiculo,this.unVehiculo.marca,this.unVehiculo.modelo,this.unVehiculo.fechaCompra,this.unVehiculo.estado,this.unVehiculo.patente,this.unVehiculo.foto,this.unVehiculo.tipo,this.unVehiculo.observaciones,this.camionGeneral.capacidadCarga,this.camionGeneral.cantidadRuedas,this.camionGeneral.acoplado));

  addVehiculo() {

    if(this.formCompleto())
    {

      if (this.editar == false) {

        this.database.agregarVehiculo(new Vehiculo(this.unVehiculo.nroVehiculo, this.unVehiculo.marca, this.unVehiculo.modelo, this.unVehiculo.fechaCompra, this.unVehiculo.estado, this.unVehiculo.patente, this.unVehiculo.foto,this.unVehiculo.tipo, this.unVehiculo.observaciones));
      }
      else 
      {
        this.database.actualizarVehiculo({
          "nroVehiculo":this.unVehiculo.nroVehiculo,
          "marca":this.unVehiculo.marca,
          "modelo":this.unVehiculo.modelo,
          "fechaCompra":this.unVehiculo.fechaCompra,
          "estado":this.unVehiculo.estado,
          "patente":this.unVehiculo.patente,
          "foto":this.unVehiculo.foto,
          "observaciones":this.unVehiculo.observaciones,
          "id":this.unVehiculo.id,
          "tipo": this.unVehiculo.tipo
        });
      }

      this.vaciar();
    }
    else
    {
      alert('Faltan datos')
    }

    this.editar = false;
  }

  editarVehiculo(unVehiculo) {
    this.editar = true;
    this.unVehiculo = unVehiculo;
  }

  formCompleto(){

    if(this.unVehiculo.nroVehiculo != null && this.unVehiculo.patente != '' && this.unVehiculo.marca != '' && this.unVehiculo.modelo != '' && this.unVehiculo.fechaCompra != null && this.unVehiculo.estado != '' && this.unVehiculo.tipo != '')
    {
      return true;
    }
    else
    {
      return false;
    }

  }

  vaciar(){
    this.unVehiculo = new Vehiculo(null, '', '', null, '', '', '', '','');
  }


}






