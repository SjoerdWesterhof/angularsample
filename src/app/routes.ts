import { Routes } from '@angular/router'

import { EventsListComponent } from './events-list.component'
import { CreateEventComponent } from './create-event.component'
import { SettingsComponent } from './settings/settings.component';

export const appRoutes:Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]