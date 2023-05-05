import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  palabras: Array<Palabra>;
  opciones: Array<String>;
  respuestas: Array<Number>;
  indicePalabra: number = 0;
  indiceOpcion: number = 0;
  indiceRespuesta: number = 0;
  contador: number = 0;
  palabra: Palabra = new Palabra(0, "", "");
  opcion: String = new String();
  respuesta: Number = new Number();
  alertSuccess: boolean = false;
  alertDanger: boolean = false;
  alertMsg: string = "";
  deshabilitar: boolean =false;


  constructor() {
    this.palabras = new Array<Palabra>();
    this.palabras.push(new Palabra(1, "Elefante", "img01.jpg")); 
    this.palabras.push(new Palabra(2, "Pelota", "img02.jpg")); 
    this.palabras.push(new Palabra(3, "Sonrisa", "img03.jpg")); 
    this.palabras.push(new Palabra(4, "Abeja", "img04.jpg")); 
    this.palabras.push(new Palabra(5, "Perro", "img05.jpg"));
    this.palabras.push(new Palabra(6, "Zapato", "img06.jpg")); 
    this.palabras.push(new Palabra(7, "Caleidoscopio", "img07.jpg")); 
    this.palabras.push(new Palabra(8, "Gato", "img08.jpg")); 
    this.palabras.push(new Palabra(9, "Velocidad", "img09.jpg")); 
    this.palabras.push(new Palabra(10, "Amigo", "img10.jpg"));

    this.opciones = new Array<String>();
    this.opciones.push(new String("Vocales"));
    this.opciones.push(new String("Consonantes"));
    this.opciones.push(new String("Letras"));
    this.opciones.push(new String("Silabas"));

    this.respuestas = new Array<Number>();

    this.iniciar();
  
   }

   iniciar(){
    this.indicePalabra =this.determinarAleatorio(this.palabras.length, 0);
    this.palabra = this.palabras[this.indicePalabra];
    this.indiceOpcion =this.determinarAleatorio(this.opciones.length, 0);
    this.opcion = this.opciones[this.indiceOpcion];

    this.cargarRespuesta();
   }

   cargarRespuesta(){
    let longitud: number = this.palabra.nombre.length;
    let i: number = 0;
    let valoracargar: number = 0;
    this.respuestas = [];

    switch (this.opcion.charAt(0)){
      case 'V':
        this.respuestas[i] = this.contarVocales(this.palabra.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
        i++;
        break;
      case 'C':
        this.respuestas[i] = this.contarConsonantes(this.palabra.nombre);
        i++;
        break;
      case 'S':
        this.respuestas[i] = this.contarSilabas(this.palabra.nombre);
        i++;
        break;
      default:
        this.respuestas[i] = this.contarLetras(this.palabra.nombre);
        i++;
    }

    while(i <= 3){
      valoracargar = this.determinarAleatorio(longitud + 1, 0);
      if(this.respuestas.indexOf(valoracargar) === -1){
        this.respuestas[i] = valoracargar;
        i++;
      }
    }
    this.respuestas.sort(() => Math.random() - 0.5);
   }


   determinarAleatorio(max: number, min: number) {
    let valor: number;
    valor = Math.floor(Math.random() * (max - min) + 0) + min;
    return valor;
  }

  contarVocales(p: String): number {
    let matches = p.match(/[aeiou]/gi);
    if (matches !== null){
      return matches.length;
    }else{
      return 0;
    }
  }

  contarConsonantes(p: String): number {
    let matches = p.match(/[bcdfghjklmnñpqrstvwxyz]/gi);
    if(matches !== null){
      return matches.length;
    }else{
      return 0;
    }
  }

  contarLetras(p: String): number {
    let valor: number = p.length;
    return valor;
  }

    contarSilabas(p:String):number {
      let silabas = 0;
      const silabasRegex = /[aeiouáéíóúüyAEIOUÁÉÍÓÚÜY]+(?![^aeiouáéíóúüyAEIOUÁÉÍÓÚÜY]{1,2}\b)/g; 
      const matches = p.match(silabasRegex);
      if(matches !==null){
        silabas = matches.length;
      }
      return silabas;
    }

    seleccion(rta: Number) {
      let msgSuccess: string = "¡GENIAL! LA RESPUESTA ES CORRECTA ";
      let msgDanger: string = "¡TE EQUIVOCASTE! LA RESPUESTA ES INCORRECTA";
      this.alertSuccess = false;
      this.alertDanger = false;
      let primerCaracter = this.opcion.charAt(0);
      if (primerCaracter == 'V') {
        if (this.contarVocales(this.palabra.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) == rta) {
          this.alertSuccess = true;
          this.alertMsg = msgSuccess;
        } else {
          this.alertDanger = true;
          this.alertMsg = msgDanger;
        }
      } else if (primerCaracter == 'C') {
        if (this.contarConsonantes(this.palabra.nombre) == rta) {
          this.alertSuccess = true;
          this.alertMsg = msgSuccess;
        } else {
          this.alertDanger = true;
          this.alertMsg = msgDanger;
        }
      } else if (primerCaracter == 'S') {
        if (this.contarSilabas(this.palabra.nombre) == rta) {
          this.alertSuccess = true;
          this.alertMsg = msgSuccess;
        } else {
          this.alertDanger = true;
          this.alertMsg = msgDanger;
        }
      }else{
        if(this.contarLetras(this.palabra.nombre) == rta){
          this.alertSuccess = true;
          this.alertMsg = msgSuccess;         
        }else{
          this.alertDanger = true;
          this.alertMsg = msgDanger;
        }
      }
      this.deshabilitar = true;
    }
  
    siguiente() {
      this.alertDanger = false;
      this.alertSuccess = false;
      this.deshabilitar = false;
      this.iniciar();
    }

  ngOnInit(): void {
  }

}
