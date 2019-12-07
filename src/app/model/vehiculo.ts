export class Vehiculo{

    id:number;
    nroVehiculo:number;
    marca:string;
    modelo:string;
    fechaCompra:Date;
    estado:string;
    patente:string;
    foto:string;
    tipo:string;
    observaciones:string;
    acoplado: string;
    cantidadRuedas: number;
    capacidadCarga: number;

    constructor(nroVehiculo:number,marca:string,modelo:string,fechaCompra:Date,estado:string,patente:string,foto:string,tipo:string,observaciones:string,
        acoplado: string,cantidadRuedas: number,capacidadCarga: number) {

        this.nroVehiculo=nroVehiculo;
        this.marca=marca;
        this.modelo=modelo;
        this.fechaCompra=fechaCompra;
        this.estado=estado;
        this.patente=patente;
        this.foto=foto;
        this.tipo=tipo;
        this.observaciones=observaciones;
        this.acoplado=acoplado;
        this.cantidadRuedas=cantidadRuedas;
        this.capacidadCarga=capacidadCarga;
    }

}