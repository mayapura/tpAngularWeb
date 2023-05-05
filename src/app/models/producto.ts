export class Producto {
    codigo: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;

    constructor(codigo: number, nombre: string, descripcion: string, imagen: string, precio: number){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
    }
}
