import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import {EventService} from '../services/event.service';
import {Router} from  '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';

@Component({
  selector: 'event',
  template: `
  <div class="">
  <h4> Event Detail </h4>
  <div> <label>Id:</label>
          <input type="text" [(ngModel)]="selectedEvent.id" />
</div>

<div> <label>Event Name:</label>
          <input type="text" [(ngModel)]="selectedEvent.name" />
</div>

<div> <label>description:</label>
          <input type="text" [(ngModel)]="selectedEvent.description" />
</div>

<div> <label>Location:</label>
          <input type="text" [(ngModel)]="selectedEvent.location" />
</div>

<div> <label>Speaker:</label>
          <input type="text" [(ngModel)]="selectedEvent.speaker" />
</div>

<div> <label>date</label>
          <input type="text" [(ngModel)]="selectedEvent.dateTime" />
</div>
  </div>
  
  <button class="btn" (click)="goBack()"> Go Back</button>
 <button class="btn btn-primary" (click)="save()">Save</button>
  `,
  styles:[``]
})
export class EventComponent implements OnInit{
    @Input() event:Event;
    private selectedEvent:Event;
    
    constructor(private _eventService:EventService,
    private router:Router,private activatedRoute:ActivatedRoute, private location:Location){}
    showEvent:boolean;

    ngOnInit(){
      this.activatedRoute.params.switchMap(
            (param:Params) => this._eventService
            .getEvent(param['id']))
            .subscribe(event=>this.selectedEvent=event);
    }

    showSelectedEventdeatials(event){
      this.selectedEvent=event;
       this.toogle(event);
    }

    delete(event){
      this._eventService
      .deleteEvent(event);
    }

    toogle(event){
      event.hide=!event.hide;
    }

    navigateToHome(){
      console.log("navigate");
    this.router.navigate(['']);
    }


    save(){
          console.log("save called");
         this._eventService.update(this.selectedEvent).then();
     }

     goBack(){
         this.location.back();
     }
}