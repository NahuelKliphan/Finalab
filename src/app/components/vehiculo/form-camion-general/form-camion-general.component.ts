import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service'


@Component({
  selector: 'app-form-camion-general',
  templateUrl: './form-camion-general.component.html',
  styleUrls: ['./form-camion-general.component.css']
})
export class FormCamionGeneralComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {

  }

   camionGeneral = {
    "capacidadCarga": null,
    "cantidadRuedas": null,
    "acoplado": null
  }

}
