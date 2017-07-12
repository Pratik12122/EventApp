import { Component, Input } from '@angular/core';
import { Event } from '../models/event.model';
@Component({
  selector: 'event',
  templateUrl: '../views/event.component.html',
  styles:[``]
})
export class EventComponent{
    @Input() event:Event;
    @Input() selectedEvent:Event;

    showEvent:boolean;

    showSelectedEventdeatials(event){
      this.selectedEvent=event;
       this.toogle(event);
    }

    toogle(event){
      event.hide=!event.hide;
    }
}