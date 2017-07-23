import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';
import {EventService} from '../services/event.service';

@Component({
selector: 'event-form',
templateUrl:'../views/eventForm.component.html'
})
export class EventFormComponent {

    @Output() eventCreated = new EventEmitter<Event>();

    constructor(private _eventService:EventService){

    }
    createEvent(id,name,desc,location,speaker){
       this._eventService.addEvent(id,name,desc,location,speaker);
    }

}