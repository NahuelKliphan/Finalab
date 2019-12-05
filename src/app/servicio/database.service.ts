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

  unVehiculo: Vehiculo;
  unCamionGeneral: CamionGeneral;
  unCamionVolcador: CamionVolcador;

  //Vehiculos

  getVehiculos() {
    this._httpClient.get<Vehiculo[]>('http://localhost:3000/vehiculos/')
      .subscribe(
        (data) => this.listadoVehiculos = data
      );
  }

  getVehiculoById(id: string) {
    this._httpClient.get<Vehiculo>(`http://localhost:3000/vehiculos/${id}`)
    .subscribe( (data) => {this.unVehiculo = data; } );
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

  getCamionGeneralById(id: string) {
    this._httpClient.get<CamionGeneral>(`http://localhost:3000/camionesGenerales/${id}`)
    .subscribe( (data) => {this.unCamionGeneral = data; } );
  }

  //Camion Volcador

  agregarCamionVolcador(nuevoCamion: CamionVolcador) {
    this._httpClient.post('http://localhost:3000/camionesVolcadores/', nuevoCamion).subscribe(() => {
      this.getVehiculos();
    });

  }

  getCamionVolcadorById(id: string) {
    this._httpClient.get<CamionVolcador>(`http://localhost:3000/camionesVolcadores/${id}`)
    .subscribe( (data) => {this.unCamionVolcador = data; } );
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
