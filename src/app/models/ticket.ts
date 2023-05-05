export class Ticket {
    id: number;
    dni: number;
    precioReal: number;
    tipoEspectador: string;
    fechaCobro: string;
    precioCobrado: number;

    constructor(id:number, dni: number, precioReal: number, tipoEspectador: string, fechaCobro: string, precioCobrado: number){
        this.id = id;
        this.dni = dni;
        this.precioReal = precioReal;
        this.tipoEspectador = tipoEspectador;
        this.fechaCobro = fechaCobro;
        this.precioCobrado = precioCobrado;
    }
}
