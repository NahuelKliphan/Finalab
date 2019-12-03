import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';


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
    console.log(id);
    this._httpClient.delete(`http://localhost:3000/vehiculos/${id}`).subscribe(
      () => {
        this.getVehiculos()
    
      }

    );
  }






}
