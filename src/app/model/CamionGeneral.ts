import { Vehiculo } from './Vehiculo';

export class CamionGeneral extends Vehiculo{

    capacidadCarga:number;
    cantidadRuedas:number;
    acoplado:string;
    id:number;
    idVehiculo:number;

    constructor(nroVehiculo:number,marca:string,modelo:string,fechaCompra:Date,estado:string,patente:string,foto:string,tipo:string,observaciones:string,
        capacidadCarga:number,cantidadRuedas:number,acoplado:string, idVehiculo:number){

            super(nroVehiculo,marca,modelo,fechaCompra,estado,patente,foto,tipo,observaciones);
            this.capacidadCarga =capacidadCarga;
            this.cantidadRuedas =cantidadRuedas;
            this.acoplado = acoplado;
            this.idVehiculo = idVehiculo;
    }

}