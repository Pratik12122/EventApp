import { Component,OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventData } from '../mockdata/event.data';
import {EventService} from '../services/event.service';

@Component({
  selector: 'event-dashboard',
  template: `
              
                  <div let *ngFor ="let event of Events">
                     <div class="card card-inverse" style="width: 60rem;background-color: #333; border-color: #333;">
                          <div class="card-block">
                          <h3 class="card-title">{{event.name}}</h3>
                          <p class="card-text">Location: {{event.location}}</p>
                          <input type="button" class="btn btn-primary btn-sm" 
                              value="Details" [routerLink]="['/detail',event.id]" 
                          />
                          <button type="button" class="btn btn-danger btn-sm" 
                          (click)="delete(event)">
                                <span class="glyphicon glyphicon-remove"></span> Remove Event
                          </button>
                        </div>
                      </div>
                  </div>
                       
`
})
export class EventDashboardComponent implements OnInit{
  private selectedEvent:Event;
  Events:Event[];

  constructor(private _eventService:EventService){}

  ngOnInit():void{
    this._eventService.getEvents()
    .then(data => this.Events= data);
  }

  showSelectedEventdeatials(event){
      this.selectedEvent=event;
       this.toogle(event);
    }

    toogle(event){
      event.hide=!event.hide;
    }

  
  addEvent(event){
    this.Events.unshift(event);
  }


  delete(event){
    this._eventService
    .deleteEvent(event)
    .then(()=> this.Events = this.Events.filter(h=>h!=event));
  }
}
