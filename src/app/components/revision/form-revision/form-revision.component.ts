import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service'
import { Revision } from 'src/app/model/Revision';

@Component({
  selector: 'app-form-revision',
  templateUrl: './form-revision.component.html',
  styleUrls: ['./form-revision.component.css']
})
export class FormRevisionComponent implements OnInit {

  constructor(private database: DatabaseService) {
    this.database.getTalleres();
  }

  ngOnInit() {

  }

  unaRevision = new Revision(null, null, 1, null, null, null, Number(localStorage.getItem('id')), '', '', null);

  nueva: Revision;

  revisiones: Revision[] = [];

  editar: boolean = false;

  fecha: Date;


  addRevision() {

    //Comprueba que todos los campos estén llenos
    if (this.formCompleto()) {

      //Va creando la cantidad de revisiones que se quiere
      for (let i = 0; i < this.unaRevision.cantidad; i++) {

        this.nueva = new Revision(new Date(this.unaRevision.fechaEntrada), new Date(this.unaRevision.fechaSalida), this.unaRevision.cantidad, this.unaRevision.periodo, this.unaRevision.km, this.unaRevision.idTaller, Number(localStorage.getItem('id')), this.unaRevision.tareasRealizar, this.unaRevision.tareasRealizadas, this.unaRevision.programado);

        this.revisiones.push(this.nueva);

        //Pregunta si es programada para asignar la fecha sola
        if (this.nueva.programado) {

          //Si es la primera no se nesesita asignar fecha
          if (this.revisiones.length != 1) {

            this.revisiones[i].fechaEntrada.setDate(this.revisiones[i - 1].fechaEntrada.getDate() + parseInt(this.nueva.periodo.toString()));

          }

        }

      }

      this.database.agregarRevision(this.revisiones);
      this.revisiones = [];

      this.vaciar();
    }
    else {
      alert('Faltan datos')
    }

    this.editar = false;
  }

  formCompleto() {

    if (this.unaRevision.km != null && this.unaRevision.idTaller != null) {
      return true;
    }
    else {
      return false;
    }

  }

  vaciar() {
    this.unaRevision = new Revision(null, null, null, null, null, null, null, '', '', null);
  }

  editarRevision(unaRevision) {
    this.editar = true;
    this.unaRevision = unaRevision;
  }

  editRevision() {
   
  }

}
