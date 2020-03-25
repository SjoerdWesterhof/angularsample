import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EventService } from './event.service';
import { appRoutes } from './routes'
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    NavigationComponent,
    SettingsComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

