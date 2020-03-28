import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-todo-details',
  templateUrl: './todo-details.component.html',
})
export class TodoDetailsComponent {   
  @Input() item: any;
  
}