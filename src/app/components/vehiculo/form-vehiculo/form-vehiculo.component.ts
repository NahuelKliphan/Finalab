import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import {DatabaseService} from 'src/app/servicio/database.service'

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }


  unVehiculo:Vehiculo = new Vehiculo(Vehiculo.nro,'Ford','Raptor', new Date("2015-03-25") ,'nuevo','AE123AA', 'new ImageData(2,2)','Todo bien');

  editar : boolean = false ;

  addVehiculo(){

    
      if(this.editar == false)
      {
        this.database.agregarVehiculo(new Vehiculo(Vehiculo.nro,'Ford','Raptor', new Date("2015-03-25") ,'nuevo','AE123AA', 'new ImageData(2,2)','Todo bien'));
      }
      else
      {

      }

      this.editar = false;

      };
    
    
  }




