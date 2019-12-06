import { Component, OnInit, Input } from '@angular/core';
import {Vehiculo} from 'src/app/model/Vehiculo';
import { DatabaseService } from 'src/app/servicio/database.service';

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

}
