import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/Vehiculo';
import { Taller } from '../model/Taller';
import { Revision } from '../model/Revision';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private _httpClient: HttpClient) { }


  listadoVehiculos: Vehiculo[] = [];
  listadoTalleres: Taller[] = [];
  listadoRevisiones: Revision[] =[]
  nombreTalleres: string[] = [];

  //Vehiculos

  getVehiculos() {
    this._httpClient.get<Vehiculo[]>('http://localhost:4000/api/vehiculos/')
      .subscribe(
        (data) => this.listadoVehiculos = data
      );
  }

  getVehiculoById(id: string) {
    return this._httpClient.get<Vehiculo>(`http://localhost:4000/api/vehiculos/${id}`);
  }

  agregarVehiculo(nuevoVehiculo: Vehiculo) {
    this._httpClient.post('http://localhost:4000/api/vehiculos/', nuevoVehiculo).subscribe(() => {
      this.getVehiculos();
    });
  }


  borrarVehiculo(id: number) {
    this._httpClient.delete(`http://localhost:4000/api/vehiculos/${id}`).subscribe(
      () => {
        this.getVehiculos()
      }

    );
  }

  actualizarVehiculo(vehiculo: Vehiculo) {
    this._httpClient.put(`http://localhost:4000/api/vehiculos/${vehiculo.id}`, vehiculo)
      .subscribe(
        () => this.getVehiculos()
      );
  }

  
  //Taller

  getTalleres() {
    this._httpClient.get<Taller[]>('http://localhost:4000/api/talleres/')
      .subscribe(
        (data) => {this.listadoTalleres = data;
          this.listadoTalleres = data;
          this.listadoTalleres.forEach(x => {

            this.nombreTalleres[x.id] = x.nombre;

          });}
      );
  }

  agregarTaller(nuevoTaller: Taller) {
    this._httpClient.post('http://localhost:4000/api/talleres/', nuevoTaller).subscribe(() => {
      this.getTalleres()
    });
  }


  borrarTaller(id: number) {
    this._httpClient.delete(`http://localhost:4000/api/talleres/${id}`).subscribe(
      () => {
        this.getTalleres()
      }

    );
  }

  actualizarTaller(taller: Taller) {
    this._httpClient.put(`http://localhost:4000/api/talleres/${taller.id}`, taller)
      .subscribe(
        () => this.getTalleres()
      );
  }

  //Revision

  getRevisiones() {
    this._httpClient.get<Revision[]>(`http://localhost:4000/api/revisiones/`+ localStorage.getItem('id'))
      .subscribe(
        (data) => {this.listadoRevisiones = data;}
      );
  }

  agregarRevision(revisiones: Revision[]) {

    revisiones.forEach(unaRevision => {

      this._httpClient.post('http://localhost:4000/api/revisiones/', unaRevision).subscribe((data) => {
         this.getRevisiones();
      });

    });
  }

  borrarRevision(id: number) {
    this._httpClient.delete(`http://localhost:4000/api/revisiones/${id}`).subscribe(
      () => {
        this.getRevisiones();
      }

    );
  }

  actualizarRevision(revision: Revision) {
    this._httpClient.put(`http://localhost:4000/api/revisiones/${revision.id}`, revision)
      .subscribe(
        () => this.getRevisiones());
      ;
  }

}
