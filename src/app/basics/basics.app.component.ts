import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.app.component.html'
})
export class BasicsAppComponent {
  public name: string;
  public receiveUsername(username: string): void {
    console.log(username);
  }
}
