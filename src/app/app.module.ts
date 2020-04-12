import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EventService } from './event.service';
import { appRoutes } from './routes'
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';

import { TodoListComponent } from './todos/list/todo-list.component';
import { TodoDetailsComponent } from './todos/details/todo-details.component';
import { TodoService } from './todos/todo.service';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    NavigationComponent,
    SettingsComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  providers: [ EventService, TodoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

