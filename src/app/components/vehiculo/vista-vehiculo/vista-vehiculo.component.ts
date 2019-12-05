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

  ngOnInit() {

  }

  Probar(){

    console.log(this.database.get());

  }

  unVehiculo: Vehiculo; //new Vehiculo(1,'Ford','Raptor',new Date(),'Nuevo','AD123AA','foto','Auto','Excelente estado');
  unCamionGeneral: CamionGeneral = new CamionGeneral(1,'Ford','Raptor',new Date(),'Nuevo','AD123AA','foto','Auto','Excelente estado',1,1,'Si',1);
  unCamionVolcador: CamionVolcador =null;// new CamionVolcador(1,'Ford','Raptor',new Date(),'Nuevo','AD123AA','foto','Auto','Excelente estado',1,1,1);

}
