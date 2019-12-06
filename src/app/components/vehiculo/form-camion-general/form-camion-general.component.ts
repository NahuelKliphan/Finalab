import { Component, OnInit,Input} from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import {Vehiculo} from 'src/app/model/Vehiculo';

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
  
}
