export class Revision {

    id:number;
    fechaEntrada:Date;
    fechaSalida:Date;
    cantidad:number;
    periodo:number;
    km:number;
    idTaller:number;
    idVehiculo:number;
    tareasRealizar:string;
    tareasRealizadas:string;
    programado:boolean;

    constructor(fechaEntrada:Date,fechaSalida:Date,cantidad:number,periodo:number,km:number,idTaller:number,idVehiculo:number,tareasRealizar:string,tareasRealizadas:string,programado:boolean)
    {
        this.fechaEntrada=fechaEntrada;
        this.fechaSalida=fechaSalida;
        this.cantidad=cantidad;
        this.periodo=periodo;
        this.km=km;
        this.idTaller=idTaller;
        this.idVehiculo=idVehiculo;
        this.tareasRealizar=tareasRealizar;
        this.tareasRealizadas=tareasRealizadas;
        this.programado=programado;

    }
}