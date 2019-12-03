export class Vehiculo{

    id:number;
    nroVehiculo:number;
    marca:string;
    modelo:string;
    fechaCompra:Date;
    estado:string;
    patente:string;
    foto:string;
    observaciones:string;

    constructor(nroVehiculo:number,marca:string,modelo:string,fechaCompra:Date,estado:string,patente:string,foto:string,observaciones:string) {

        this.nroVehiculo=nroVehiculo;
        this.marca=marca;
        this.modelo=modelo;
        this.fechaCompra=fechaCompra;
        this.estado=estado;
        this.patente=patente;
        this.foto=foto;
        this.observaciones=observaciones;
    }

}