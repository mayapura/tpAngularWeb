import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {
  ticket: Ticket = new Ticket(0,0,0,"","",0);
  tickets: Array<Ticket> =new Array<Ticket>();
  precioDescuento: number = 0;
  mostrar: boolean = false;

  constructor(private ticketService:TicketService, private router:Router) 
  { 
    this.tickets=this.listarTickets();
    console.log(this.tickets);
  }

  ngOnInit(): void {
  }


  listarTickets(): Array<Ticket>{
    let ticketsTemp : Array<Ticket> = new Array<Ticket>();
    ticketsTemp = this.ticketService.getTickets();
    return ticketsTemp;
  }

  agregarTicket(){
    this.router.navigate(['punto5-form', 0]);
  }

  editarTicket(ticket: Ticket):void{
    console.log(ticket);
    this.router.navigate(['punto5-form', ticket.id]);
  }

  borrarTicket(ticket: Ticket):void{
    this.ticketService.deleteTicket(ticket);
    this.tickets = this.listarTickets();
  }

}
