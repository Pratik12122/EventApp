import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { AppComponent } from './app.component';
import { EventListComponent } from './components/EventList.component';
import { EventComponent } from './components/event.component';
import { EventFormComponent } from './components/eventForm.component';
import { routing123 } from './app.routing';
import {EventDashboardComponent } from './components/eventdashboard.component';
import {EventService} from './services/event.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventFormComponent,
    EventDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing123,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
