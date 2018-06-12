import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cd-app',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './cd-app.component.html'
})
export class CdAppComponent {
  public user: any = {
    name: 'Bitchiko Tchelidze',
    age: 22,
    location: 'Persati'
  };

  public addProp(): void {
    this.user.email = 'blink@blink-182.net';
  }
  public changeUser(): void {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'Califonia'
    };
  }
  public changeName(): void {
    this.user.name = 'Travis Barker';
  }
}
