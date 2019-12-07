import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import { Revision } from 'src/app/model/Revision';

@Component({
  selector: 'app-lista-revision',
  templateUrl: './lista-revision.component.html',
  styleUrls: ['./lista-revision.component.css']
})
export class ListaRevisionComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getRevisiones();
  }

  busqueda: string = "";

  @Output() RevisionAmodificar = new EventEmitter();

  eliminarRevision(id: number) {
    this.database.borrarRevision(id);
    this.database.getRevisiones();
  }

  solicitarModificacion(unaRevision: Revision) {
    this.RevisionAmodificar.emit(unaRevision);
  }

}
