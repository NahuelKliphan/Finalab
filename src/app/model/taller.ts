export class Taller {

    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    encargado: string;

    constructor(nombre: string, direccion: string, telefono: string, encargado: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.encargado = encargado;
    }

}