import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: Array<Ticket>;

  constructor() { 
    this.tickets = new Array<Ticket>();
    this.tickets = [
      {
        id: 1,
        dni: 35896699,
        precioReal: 123,
        tipoEspectador: "e",
        fechaCobro: "6/02/2023",
        precioCobrado: 123
      },
      {
        id: 2,
        dni: 25765429,
        precioReal: 234,
        tipoEspectador: "e",
        fechaCobro: "1/03/2023",
        precioCobrado: 234
      },
      {
        id: 3,
        dni: 6987482,
        precioReal: 425,
        tipoEspectador: "l",
        fechaCobro: "8/05/2023",
        precioCobrado: 425
      }
    ]
  }

  getTickets(): Array<Ticket>{
    return this.tickets;
  }

  addTicket(ticket: Ticket){
    ticket.id = this.getDisponible();
    this.tickets.push(ticket);
  }

  getDisponible(){
    var maxid: number;
    maxid = 0;
    for(var i = 0; i < this.tickets.length; i++){
      if(maxid < this.tickets[i].id){
        maxid = this.tickets[i].id;
      }
    }
    return (maxid + 1);
  }

  getTicket(id: number): Ticket{
    let ticket: Ticket = new Ticket(0,0,0,"","",0);
    let indexTicket: number = this.tickets.findIndex(tck => (tck.id == id));
    ticket = this.tickets[indexTicket];
    return ticket;
  }

  updateTicket(ticket: Ticket): void{
    let indexTicket: number = ticket.id;
    this.tickets[indexTicket-1] = ticket;
  }

  deleteTicket(ticket: Ticket): void{
    for(var i=0; i < this.tickets.length; i++){
      if(this.tickets[i].id == ticket.id){
        this.tickets.splice(i, 1);
      }
    }
  }

}
