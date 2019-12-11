import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicio/database.service';
import { Taller } from 'src/app/model/Taller';

@Component({
  selector: 'app-lista-taller',
  templateUrl: './lista-taller.component.html',
  styleUrls: ['./lista-taller.component.css']
})
export class ListaTallerComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getTalleres();
  }

  busqueda: string = "";

  @Output() TallerAmodificar = new EventEmitter();
  @Output() Borrar = new EventEmitter();

  eliminarTaller(id:number){
    if(window.confirm('Si está vinculado a una revision se borrara tambien, esta seguro?')){

      this.database.borrarTaller(id);
      this.database.getTalleres();
      this.Borrar.emit();
    }
  }

  solicitarModificacion(unTaller:Taller){
    this.TallerAmodificar.emit(unTaller);
  }

}
