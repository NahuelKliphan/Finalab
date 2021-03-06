import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { DatabaseService } from 'src/app/servicio/database.service';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  unVehiculo: Vehiculo = new Vehiculo(null, '', '', null, '', '', null, '', '', null, null, null);

  editar: boolean = false;

  addVehiculo() {

    if (this.formCompleto()) {

      if(this.verificarUnicidad()){

      this.database.agregarVehiculo(new Vehiculo(this.unVehiculo.nroVehiculo, this.unVehiculo.marca, this.unVehiculo.modelo, this.unVehiculo.fechaCompra, this.unVehiculo.estado, this.unVehiculo.patente, this.unVehiculo.foto, this.unVehiculo.tipo, this.unVehiculo.observaciones,
      this.unVehiculo.acoplado, this.unVehiculo.cantidadRuedas, this.unVehiculo.capacidadCarga));
      this.vaciar();
      }
      else{
        alert('Datos claves repetidos');
      }

    }
    else {
      alert('Faltan datos');
    }

    this.editar = false;
  }

  editVehiculo() {

    if (this.formCompleto()) {

      this.database.actualizarVehiculo({
        "nroVehiculo": this.unVehiculo.nroVehiculo,
        "marca": this.unVehiculo.marca,
        "modelo": this.unVehiculo.modelo,
        "fechaCompra": this.unVehiculo.fechaCompra,
        "estado": this.unVehiculo.estado,
        "patente": this.unVehiculo.patente,
        "foto": this.unVehiculo.foto,
        "observaciones": this.unVehiculo.observaciones,
        "id": this.unVehiculo.id,
        "tipo": this.unVehiculo.tipo,
        "acoplado": this.unVehiculo.acoplado,
        "cantidadRuedas": this.unVehiculo.cantidadRuedas,
        "capacidadCarga": this.unVehiculo.capacidadCarga
      });

      this.vaciar();

    }
    else {
      alert('Faltan datos')
    }

    this.editar = false;

  }

  editarVehiculo(unVehiculo) {
    this.editar = true;
    this.unVehiculo = unVehiculo;
  }

  borrarVehiculo() {
    this.editar = false;
    this.vaciar();
  }


  formCompleto() {

    if (this.unVehiculo.nroVehiculo != null && this.unVehiculo.patente != '' && this.unVehiculo.marca != '' && this.unVehiculo.modelo != '' && this.unVehiculo.fechaCompra != null && this.unVehiculo.estado != '' && this.unVehiculo.tipo != '') {
      return true;
    }
    else {
      return false;
    }

  }

  vaciar() {
    this.unVehiculo = new Vehiculo(null, '', '', null, '', '', null, '', '', null, null, null);
  }

  fileData: File = null;
  previewUrl: any = null;

  cargarFoto(fileInput: any) {

    this.fileData = <File>fileInput.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      
      this.previewUrl = reader.result;
      this.unVehiculo.foto = this.previewUrl;
    }

  }

  verificarUnicidad(){

    if(this.database.listadoVehiculos.filter(v => v.nroVehiculo === this.unVehiculo.nroVehiculo).length > 0 || this.database.listadoVehiculos.filter(v => v.patente === this.unVehiculo.patente).length > 0  )
    {
      return false;
    }
    else{
      return true;
    }

  }

}






