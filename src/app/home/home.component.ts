
import { Component, OnInit } from '@angular/core';
import { TicketService } from './../service/ticket.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'AngularTicketSystem';
  listTickets: any[];
  showTicket:string;

  
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private ser:TicketService){

  }
  ngOnInit(){
  this.ser.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe
  ((data: any[]) => {
      console.log("get data ",data)
      this.listTickets = data;
      console.log("get ticket ", this.listTickets);
  });
  console.log("tickets" ,this.listTickets);
  }

  popWind(v){
    console.log("t", v);
    this.showTicket=v;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
