import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  productos: Array<Producto>;
  carritos: Array<Producto>;
  cantidad: number = 0;
  total: number = 0 ;

  constructor() {
    this.productos = new Array<Producto>();
    this.productos.push(new Producto(1,"Notebook Asus ZenBook", "disco SSD 512GB, 14 pulgadas","prod01.jpg",595000));
    this.productos.push(new Producto(2,"Monitor LG 24GN600", "2 HDMI 2.0, DisplayPort 1.4, Jack 3.5 mm, 24 pulgadas","prod02.jpg",113000));
    this.productos.push(new Producto(3,"Monitor gamer LG 29WP500", "Jack 3.5 mm, 2 HDMI, 19 pulgadas","prod03.jpg",120000));
    this.productos.push(new Producto(4,"Tablet Lenovo Tab11 YT-J706F", "RAM 4GB, Capacidad 128GB, Cámaras traseras 8Mp, 11 pulgadas","prod04.jpg",126000));
    this.productos.push(new Producto(5,"Tablet Gráfica Gadnic Tbg123", "Área de trabajo 25cm x 15cm, resolución 5080 lpi, lápiz","prod05.jpg",23000));
    this.productos.push(new Producto(6,"Impresora Láser Brother HL1212W", "Simple Función, Impresión Monocromática, Laser, WIFi","prod06.jpg",115000));

    this.carritos = new Array<Producto>();

  }

  ngOnInit(): void { 
  }

  agregarProducto (producto: Producto){
    this.carritos.push(producto);
    this.total += producto.precio;
    this.cantidad = this.carritos.length;
    console.log(producto);
    console.log(this.total);
    console.log(this.carritos);
  }


}
