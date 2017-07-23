import {Routes, RouterModule} from '@angular/router';
import {EventListComponent} from './components/eventList.component';
import {EventFormComponent} from './components/eventForm.component';
import {EventDashboardComponent } from './components/eventdashboard.component';
import {EventComponent} from './components/event.component';

const APP_ROUTES:Routes=[
    {path:'form',component:EventFormComponent},
      {path:'detail/:id',component:EventComponent},
    {path:'dashboard',component:EventDashboardComponent},
    {path:'',pathMatch:'full',redirectTo:'dashboard'}
];


export const routing123 = RouterModule.forRoot(APP_ROUTES);

