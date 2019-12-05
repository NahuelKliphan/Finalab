import { Vehiculo } from './Vehiculo';

export class CamionVolcador extends Vehiculo {


    capacidadCarga:number;
    cantidadRuedas:number;
    idVehiculo:number;

    
    constructor(nroVehiculo:number,marca:string,modelo:string,fechaCompra:Date,estado:string,patente:string,foto:string,tipo:string,observaciones:string,
        capacidadCarga:number,cantidadRuedas:number, idVehiculo:number){

            super(nroVehiculo,marca,modelo,fechaCompra,estado,patente,foto,tipo,observaciones);
            this.capacidadCarga =capacidadCarga;
            this.cantidadRuedas =cantidadRuedas;
            this.idVehiculo = idVehiculo;
    }

}