import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-punto5-form',
  templateUrl: './punto5-form.component.html',
  styleUrls: ['./punto5-form.component.css']
})
export class Punto5FormComponent implements OnInit {
  ticket: Ticket;
  precioCobrado: number = 0;
  mostrar: boolean = false;
  accion: string = "new";

  constructor(private ticketService: TicketService, private router:Router, private activatedRoute: ActivatedRoute) { 
    this.ticket = new Ticket(0,0,0,"","",0);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']== "0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }

  guardarTicket(){
    let fecha = new Date();
    this.ticket.fechaCobro = fecha.toLocaleDateString();
    this.ticket.precioCobrado= this.precioCobrado;
    this.ticketService.addTicket(this.ticket);
    this.ticket = new Ticket(0,0,0,"","",0);
    this.router.navigate(['punto5']);
  }

  limpiar(){
    this.ticket = new Ticket(0,0,0,"","",0);
  }

  calcularDescuento(){
    if(this.ticket.tipoEspectador == "l"){
      this.precioCobrado = this.ticket.precioReal - (this.ticket.precioReal*20)/100;
      this.mostrar=true
    }else if(this.ticket.tipoEspectador == "e"){
      this.precioCobrado = this.ticket.precioReal;
      this.mostrar=true;
    }
  }

  cargarTicket(id:number){
    this.ticket = this.ticketService.getTicket(id);
  }

  actualizarTicket(){
    this.calcularDescuento();
    this.ticketService.updateTicket(this.ticket);
    this.ticket = new Ticket(0,0,0,"","",0);
    this.router.navigate(['punto5']);
  }

  volver(){
    this.router.navigate(['punto5']);
  }

}
