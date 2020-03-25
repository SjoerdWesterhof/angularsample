import { Component } from '@angular/core';

@Component({
  selector: 'my-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
 
    public click(): any{
        console.log('click');
    }
}
