export class Registro {
    _id?: number;
    nombre: string;
    celular: number;
    ciudad: string;
    sitio: string;
    fecha: Date ;

    constructor(nombre: string, celular: number, ciudad: string, sitio: string, fecha: Date  ){
        this.nombre = nombre;
        this.celular = celular;
        this.ciudad = ciudad;
        this.sitio = sitio;
        this.fecha = fecha
    }
}