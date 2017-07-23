import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { EventData } from '../mockdata/event.data';

@Component({
  selector: 'event-list',
  template: `<event *ngFor="let e of Events">
            </event>`
})
export class EventListComponent {
  Events:Event[]=EventData;

  addEvent(event){
    this.Events.unshift(event);
  }
}