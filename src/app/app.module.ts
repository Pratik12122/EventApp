import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './components/EventList.component';
import { EventComponent } from './components/event.component';
import { EventFormComponent } from './components/eventForm.component';

EventFormComponent

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }