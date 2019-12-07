import { Component, OnInit } from '@angular/core';
import { Taller } from 'src/app/model/Taller';
import { DatabaseService } from 'src/app/servicio/database.service'

@Component({
  selector: 'app-form-taller',
  templateUrl: './form-taller.component.html',
  styleUrls: ['./form-taller.component.css']
})
export class FormTallerComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  unTaller: Taller = new Taller('', '', '', '');

  editar: boolean = false;

  addTaller() {

    if (this.formCompleto()) {
      this.database.agregarTaller(new Taller(this.unTaller.nombre, this.unTaller.direccion, this.unTaller.telefono, this.unTaller.encargado));
      this.vaciar();
    }
    else {
      alert('Faltan datos')
    }

    this.editar = false;
  }

  editarTaller(unTaller) {
    this.editar = true;
    this.unTaller = unTaller;
  }

  editTaller() {

    this.database.actualizarTaller({
      "nombre": this.unTaller.nombre,
      "direccion": this.unTaller.direccion,
      "telefono": this.unTaller.telefono,
      "encargado": this.unTaller.encargado,
      "id": this.unTaller.id
    });

    this.vaciar();
    this.editar = false;
  }

  borrarTaller(){
    this.editar = false;
    this.vaciar();
  }

  formCompleto() {

    if (this.unTaller.nombre != '' && this.unTaller.direccion != '' && this.unTaller.telefono != '' && this.unTaller.encargado != '') {
      return true;
    }
    else {
      return false;
    }

  }

  vaciar() {
    this.unTaller = new Taller('', '', '', '');
  }

}
