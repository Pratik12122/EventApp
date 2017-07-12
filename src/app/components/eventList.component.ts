import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { EventFormComponent } from './eventForm.component';
import { EventData } from '../mockdata/event.data';

@Component({
  selector: 'event-list',
  template: `<event-form (eventCreated)="addEvent($event)"></event-form>
              <event *ngFor="let e of Events" [event]=e ></event>`
})
export class EventListComponent {
  Events:Event[]=EventData;

  addEvent(event){
    this.Events.unshift(event);
  }
}