import { Routes } from '@angular/router'

import { EventsListComponent } from './events-list.component'
import { CreateEventComponent } from './create-event.component'
import { SettingsComponent } from './settings/settings.component';
import { TodoListComponent } from './todos/list/todo-list.component';

export const appRoutes:Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]