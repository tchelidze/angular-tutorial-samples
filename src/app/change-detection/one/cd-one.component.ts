import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cd-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
     .example-one {
       font-size : 19px;
       margin-bottom: 10px;
     }
  `
  ],
  templateUrl: './cd-one.component.html'
})
export class CdOneComponent {
  @Input('user') public user: any;

  public update(): void {
    this.user.name = 'Update from Component one';
  }
}
