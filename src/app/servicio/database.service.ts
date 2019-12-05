import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/Vehiculo';
import { CamionGeneral } from '../model/CamionGeneral';
import { Taller } from '../model/Taller';
import { CamionVolcador } from '../model/CamionVolcador';




@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private _httpClient: HttpClient) { }


  listadoVehiculos: Vehiculo[] = [];
  listadoTalleres: Taller[] = [];

  vehiculo: Vehiculo;

  set(x : Vehiculo){
    this.vehiculo = x;
  }

  get(){
    return this.vehiculo;
  }

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

  //Camion Volcador

  agregarCamionVolcador(nuevoCamion: CamionVolcador) {
    this._httpClient.post('http://localhost:3000/camionesVolcadores/', nuevoCamion).subscribe(() => {
      this.getVehiculos();
    });

  }

  //Taller


  getTalleres() {
    this._httpClient.get<Taller[]>('http://localhost:3000/talleres/')
      .subscribe(
        (data) => this.listadoTalleres = data
      );
  }

  agregarTaller(nuevoTaller: Taller) {
    this._httpClient.post('http://localhost:3000/talleres/', nuevoTaller).subscribe(() => {
      this.getTalleres()
    });
  }


  borrarTaller(id: number) {
    this._httpClient.delete(`http://localhost:3000/talleres/${id}`).subscribe(
      () => {
        this.getTalleres()
      }

    );
  }

  actualizarTaller(taller: Taller) {
    this._httpClient.put(`http://localhost:3000/talleres/${taller.id}`, taller)
      .subscribe(
        () => this.getTalleres()
      );
  }









}
