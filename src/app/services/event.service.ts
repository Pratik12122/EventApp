import {Injectable} from '@angular/core';
import { Event } from '../models/event.model';
import { EventData } from '../mockdata/event.data';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService{
    private eventList:Event[] = EventData;
    private headers = new Headers(
    {'Content-Type':'application/json'});
    private e:Event;

    private eventURL="api/Events";
    constructor(private _http:Http){}

    getEvents():Promise<Event[]>{
        return this._http.get(this.eventURL)
        .toPromise()
        .then(res => res.json().data as Event[]);
    }

    getEvent(id:number):Promise<Event>{
    const url=`${this.eventURL}/${id}`
    return this._http.get(url)
    .toPromise()
    .then(res => res.json().data as Event);
    }
    addEvent(id,name,desc,location,speaker){
        console.log(id,name,desc,location,speaker);
        this.e = new Event(id,name,desc,location,speaker);
        this.eventList.unshift(this.e);
    }

    deleteEvent(event:Event){
         const url=`${this.eventURL}/${event.id}`;
         return this._http.delete(url,{headers:this.headers})
         .toPromise()
         .then(()=>{console.log("Event deleted Successfully")});
    }


    update(event:Event):Promise<Event>{
          const url=`${this.eventURL}/${event.id}`;
          return this._http.put(url,JSON.stringify(event),{headers:this.headers})
          .toPromise()
          .then(()=> event);
          
     }
}