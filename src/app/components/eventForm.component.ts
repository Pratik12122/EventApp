import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
selector: 'event-form',
templateUrl:'../views/eventForm.component.html'
})
export class EventFormComponent {
    @Output() eventCreated = new EventEmitter<Event>();

    createEvent(id,name,desc,location,speaker){
        this.eventCreated.emit(new Event(id,name,desc,location,speaker));
    }
}