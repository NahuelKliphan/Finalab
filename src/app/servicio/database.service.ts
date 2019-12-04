import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';
import { CamionGeneral } from '../model/CamionGeneral';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private _httpClient: HttpClient) { }


  listadoVehiculos: Vehiculo[] = [];

  //Vehiculos

  getVehiculos() {
    this._httpClient.get<Vehiculo[]>('http://localhost:3000/vehiculos/')
      .subscribe(
        (data) => this.listadoVehiculos = data
      );
  }

  agregarVehiculo(nuevoVehiculo: Vehiculo) {
    this._httpClient.post('http://localhost:3000/vehiculos/', nuevoVehiculo).subscribe(() => {
      this.getVehiculos();
    });
  }


  borrarVehiculo(id: number) {
    this._httpClient.delete(`http://localhost:3000/vehiculos/${id}`).subscribe(
      () => {
        this.getVehiculos()
    
      }

    );
  }

  actualizarVehiculo(vehiculo: Vehiculo) {
    this._httpClient.put(`http://localhost:3000/vehiculos/${vehiculo.id}`, vehiculo)
    .subscribe(
      () => this.getVehiculos()
    );
  }


  //Camion General

  agregarCamionGeneral(nuevoCamion: CamionGeneral) {
    this._httpClient.post('http://localhost:3000/camionesGenerales/', nuevoCamion).subscribe(() => {
      this.getVehiculos();
    });

  }





}
